from fastapi import APIRouter
from fastapi import HTTPException, Depends, status

from fastapi_sqlalchemy import DBSessionMiddleware, db

from datetime import datetime

from starlette.config import Config
from starlette.requests import Request
from starlette.responses import Response
from starlette.middleware.sessions import SessionMiddleware
from starlette.responses import HTMLResponse, RedirectResponse
from starlette.background import BackgroundTask
from authlib.integrations.starlette_client import OAuth, OAuthError

from schema import UserInfo
from models import ModelAuthor

router = APIRouter()

config = Config('.env')
oauth = OAuth(config)

CONF_URL = 'https://accounts.google.com/.well-known/openid-configuration'
oauth.register(
    name='google',
    server_metadata_url=CONF_URL,
    client_kwargs={
        'scope': 'openid email profile'
    }
)


@router.get('/login')
async def login(request: Request):
    redirect_uri = request.url_for('auth')
    return await oauth.google.authorize_redirect(request, str(redirect_uri))


@router.get('/auth')
async def auth(request: Request, response: Response):
    try:
        token = await oauth.google.authorize_access_token(request)
    except OAuthError as error:
        return HTMLResponse(f'<h1>{error.error}</h1>')
    user = token.get('userinfo')
    if not db.session.query(ModelAuthor).filter(ModelAuthor.email == user['email']).first():
        db_user = ModelAuthor(name=user.name, picture=user.picture, email=user.email)
        db.session.add(db_user)
        db.session.commit()    
    if user:
        request.session['user'] = dict(user)
    
    expires_at = token['expires_at']
    utc = str(datetime.utcfromtimestamp(int(expires_at)).isoformat())
    cookie = f'logged_in=true; expires={utc}; Max-Age={utc}; Path=/; SameSite=Lax; Secure'

    return RedirectResponse(url='http://127.0.0.1:3000/', headers={'set-cookie': cookie})
    
@router.get('/me', response_model=UserInfo)
async def me(request: Request, response: Response) -> UserInfo:
    try:
        user = request.session['user']
    except:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)
    user_dict = {
        'name': str(user['name']),
        'picture': str(user['picture']),
        'email': str(user['email'])
    }
    return user_dict

@router.get('/logout')
async def logout(request: Request, response: Response):
    request.session.pop('user', None)
    response.set_cookie('logged_in', 'False', -1)
    return RedirectResponse(url='http://127.0.0.1:3000/', headers={'set-cookie': 'logged_in=false;'})
