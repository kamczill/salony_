from fastapi import APIRouter, HTTPException
from starlette.requests import Request
from starlette.responses import Response

import re
import requests
from bs4 import BeautifulSoup
from typing import List

from schema import NewsByHref, News


router = APIRouter(
    prefix='/news',
    tags=['News']
)

@router.get('/fresh-news', response_model=List[News])
async def get_fresh_news():
    # response.set_cookie('logged_in', 'true', max_age=60*60, expires=60*60, path="/", domain=None, secure=True, httponly=False, samesite="none")
    try:
        url = 'https://dywanik.pl/'
        page = requests.get(url)
        print('dsadsa')
        page_content = BeautifulSoup(page.content, 'lxml')
    except:
        raise HTTPException(status_code=401, detail='Fresh news not found')
    
    news = page_content.find('div', class_='lg:w-2/3').find_all('div', class_='flex flex-col gap-2 justify-between relative p-4 lg:p-0')
    news_arr = []
    
    for element in news:
        img = 'https://dywanik.pl' + element.find('img', class_='object-cover')['src']
        href = element.find('a')['href'].split('/news/')[1]
        
        title = element.find_all('a')[1].find('h2')
        del title['class']
        if title.find('b'):
            del title.find('b')['class']
        
        created_at = element.find('span', class_='uppercase text-[9px] font-extralight whitespace-nowrap z-10 relative pr-2 text-neutral').find('span')['title']
        
        tags_list = element.find('div', class_='flex gap-x-2 flex-wrap justify-end').find_all('a')
        tags = []
        for tag in tags_list:
            tags.append(tag.text.replace('#', ''))
        
        new_news = {
            'title': str(title), 
            'img': img,
            'href': href,
            'tags': tags,
            'created_at': created_at
            }
        news_arr.append(new_news)
    return(news_arr)

@router.get('/{href}', response_model=NewsByHref)
async def get_news_by_href(href:str):
    try:
        url = f'https://dywanik.pl/news/{href}'
        page = requests.get(url)
        page_content = BeautifulSoup(page.content, 'lxml')
    
    
        container = page_content.find('div', class_='container max-w-5xl mx-auto w-full 2xl:w-2/3 mt-12 px-4')
        
        title = container.find('h1')
        del title['class']
        del title.find('b')['class']
        
        created_at = re.split('[A-Z][^A-Z]', container.find('div', class_='text-xs text-neutral-500 mb-4').text)[0]
        print(created_at)
        
        author = ' '.join(re.findall('[A-Z][a-z]*', 
                            container.find('div', class_='text-xs text-neutral-500 mb-4').text))
        
        if author == '':
            author = 'anonim'
        
        all_content = page_content.find('div', class_='w-full lg:w-3/4')
        
        
        content = all_content.find_all(['article', 'img'])
        content_arr = []
        
        for el in content:
            match = re.match('^<img*', str(el))
            if match:
                newSrc = 'https://dywanik.pl' + str(el['src']).replace('&amp;w=3840&amp;q=75', '&q=75&w=3840')
                el['src'] = newSrc
                for attr in ['class', 'data-nimg', 'decoding', 'loading', 'sizes', 'srcset', 'style', 'width', 'height']:
                    del el[attr]
            el = re.sub('style=.*"', '', str(el))
            content_arr.append(el)
        
        news = {
            'title': str(title),
            'href': href,
            'content': content_arr,
            'created_at': str(created_at),
            'author': author,
        }
    except:
        raise HTTPException(status_code=404, detail='News not found')
    
    return news


