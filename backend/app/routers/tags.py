from fastapi import APIRouter, HTTPException

import requests
from bs4 import BeautifulSoup

from typing import List

from schema import News

router = APIRouter(
    prefix='/tags'
)

@router.get('/{tag}', response_model=List[News])
async def get_news_by_tag(tag: str):
    try:
        url = f'https://dywanik.pl/tag/{tag}'
        page = requests.get(url)
        page_content = BeautifulSoup(page.content, 'lxml')
        
        news_container = page_content.find('div', class_='grid gap-2 lg:gap-4')
        news_arr = news_container.find_all('div', class_='flex flex-col gap-2 justify-between relative p-4 lg:p-0')
        
        data = []

        for el in news_arr:
            title = el.find('h2')
            
            href = el.find('a')['href'].replace('/news/', '')
            
            created_at = el.find('span', 
                                 class_='uppercase text-[9px] font-extralight whitespace-nowrap z-10 relative pr-2 text-neutral').find(
                                     'span')['title']
                                 
            tagsContainer = el.find('div','flex gap-x-2 flex-wrap justify-end').find_all('a')
            tags_arr = []
            for tag in tagsContainer:
                tags_arr.append(tag.text.replace('#', ''))
                
            img = el.find('img')
            newSrc = str(img['src']).replace('&amp;w=3840&amp;q=75', '&q=75&w=3840')
            img['src'] = 'https://dywanik.pl' + newSrc
            print(img['src'])
            
            for attr in ['class', 'data-nimg', 'decoding', 'loading', 'sizes', 'srcset', 'style', 'width', 'height']:
                del img[attr]
                del title[attr]
            
            data.append({
                'title': str(title),
                'img': str(img['src']),
                'href': str(href),
                'tags': tags_arr,
                'created_at': str(created_at)
            })
        
        return data
    except:
        raise HTTPException(status_code=404, detail='News not found')