import uvicorn
from fastapi import FastAPI
from fastapi_sqlalchemy import DBSessionMiddleware, db
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.sessions import SessionMiddleware

import os
from dotenv import load_dotenv

from routers import auth, news, user_news, tags

load_dotenv('.env')

app = FastAPI()
app.add_middleware(SessionMiddleware, secret_key=os.environ['SECRET_KEY'])


origins = [
    "http://127.0.0.1:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# to avoid csrftokenError
app.add_middleware(DBSessionMiddleware, db_url=os.environ['DATABASE_URL'])


app.include_router(auth.router)
app.include_router(news.router)
app.include_router(user_news.router)
app.include_router(tags.router)



@app.get("/")
async def root():
    return {"Message": "Welcome! It's Salony API"}

# To run locally
if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=8001)