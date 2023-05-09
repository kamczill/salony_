from fastapi import APIRouter, HTTPException, status
from fastapi_sqlalchemy import db

from starlette.requests import Request

from typing import List

from schema import NewNews, UserNews, NewsByHref
from models import ModelAuthor, ModelNews

router = APIRouter(
    prefix='/users-news',
    tags=['users-news']
)

@router.get('', response_model=List[UserNews])
async def get_user_news() -> UserNews:
    try:
        user_news = db.session.query(ModelNews).with_entities(
            ModelNews.title, 
            ModelNews.img, 
            ModelNews.href, 
            ModelNews.tags,
            ModelNews.created_at).order_by(ModelNews.created_at.desc()).all()
        news_arr = []
        for news in user_news:
            news_arr.append(news._asdict())
    except:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND)
    return news_arr

@router.post('')
async def create_news(news: NewNews, request: Request):
    if not (request.session):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)
    db_user = db.session.query(ModelAuthor).filter(ModelAuthor.email == request.session['user']['email']).first()
    db_news = ModelNews(author_id=db_user.id, title='<h2>'+news.title+'</h2>', href=news.href, img=news.img, 
                      tags=news.tags, content=news.content)
    db.session.add(db_news)
    db.session.commit()
    
    return news


    
@router.get('/{href}', response_model=NewsByHref)
async def get_user_news_by_href(href: str):
    db_news = db.session.query(ModelNews).join(ModelAuthor).filter(ModelNews.href == href).with_entities(
        ModelNews.href,
        ModelNews.content,
        ModelNews.created_at,
        ModelAuthor.name.label('author'),
        ModelNews.title
        ).first()
    
    if db_news is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND)
    
    return db_news._asdict()