from sqlalchemy import Column, DateTime, ForeignKey, Integer, String, Float, ARRAY
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

Base  = declarative_base()


class ModelNews(Base):
    __tablename__ = 'news'
    id  = Column(Integer, primary_key=True, index=True)
    author = Column(String)
    title = Column(String)
    href = Column(String)
    img = Column(String)
    tags = Column(ARRAY(String))
    content = Column(String)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    author_id = Column(Integer, ForeignKey('author.id'))

    author = relationship('ModelAuthor')


class ModelAuthor(Base):
    __tablename__ = 'author'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    picture = Column(String)
    email = Column(String, unique=True)
    time_created = Column(DateTime(timezone=True), server_default=func.now())
    time_updated = Column(DateTime(timezone=True), onupdate=func.now())

