# build a schema using pydantic
from pydantic import BaseModel, EmailStr, constr
from typing import List, Union
from datetime import datetime

class News(BaseModel):
    title: str
    img: str
    href: str
    tags: List
    created_at: str
    
class NewsByHref(BaseModel):
    href: str
    content: Union[list, str]
    created_at: Union[datetime, str]
    author: str
    title: str
    
class NewNews(BaseModel):
    title: str
    img: str
    href: str
    tags: List
    content: str
    
class Author(BaseModel):
    id: int
    name: str
    picture: str
    email: EmailStr

class UserInfo(BaseModel):
    name: str
    picture: str
    email: str
    
class UserNews(BaseModel):
    title: str
    img: str
    href: str
    tags: List
    created_at: datetime