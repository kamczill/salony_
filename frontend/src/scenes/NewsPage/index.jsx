import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import Advert from '../../components/Advert'
import axios from 'axios';
import { NewsPageHeader } from '../../components/styles/NewsPage.styled';
import parse from 'html-react-parser'

import dayjs from 'dayjs'
import UTC from 'dayjs/plugin/utc'
import RelativeTime from 'dayjs/plugin/relativeTime'
import CustomParseFormat from 'dayjs/plugin/customParseFormat'
import 'dayjs/locale/pl'

import { Title, Content } from '../../components/styles/NewsPage.styled';
import { useQuery } from 'react-query';

dayjs.extend(UTC)
dayjs.extend(RelativeTime)
dayjs.extend(CustomParseFormat)
dayjs.locale('pl')

const NewsPage = () => {
    const { href } = useParams()
    const loc = useLocation()
    const isUserNews = loc.pathname.includes('/users/news')
    const [news, setNews] = useState('')
    const [date, setDate] = useState('')

  
  // const user = useQuery("userNews", async () => 
  //   await axios(`http://127.0.0.1:8001/users-news/${href}`)
  //   .then((res) => {
  //     console.log(res?.data)
  //     setNews(res?.data)
  //     setDate(dayjs(res?.data?.created_at).fromNow())
  //   })
  //   )

  const getNews = async () => {
    await axios(`http://127.0.0.1:8001/news/${href}`)
      .then((res) => {
        setNews(res?.data)
        setDate(dayjs(res?.data?.created_at, 'D.MM.YYYY, HH:mm').fromNow())
      })
  }

  const getUserNews = async () => {
    await axios(`http://127.0.0.1:8001/users-news/${href}`)
      .then((res) => {
        setNews(res?.data)
        setDate(dayjs(res?.data?.created_at).fromNow())
      })
  }

  useEffect(() => {
    if(isUserNews){
      getUserNews();
    } else {
      getNews();
    }
  }, [href])

  return (
    <div >
      <main style={{display:'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center', gap:'1rem', marginTop:'2rem'}}>
      <Advert />
      <NewsPageHeader>
        <h3>{news?.author}</h3>
        <h3>{date}</h3>
      </NewsPageHeader>
      <Title>
        {parse(news?.title || '')}
      </Title>
      <Content>
        {isUserNews ? parse(news?.content || ''): news?.content?.map(el => parse(el || ''))}
      </Content>
      </main>
    </div>
  )
}

export default NewsPage