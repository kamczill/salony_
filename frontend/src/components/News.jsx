import React, { useEffect, useState } from 'react'
import { Container, Date, DateContainer, ImgContainer} from './styles/News.styled'
import dayjs from 'dayjs'
import UTC from 'dayjs/plugin/utc'
import RelativeTime from 'dayjs/plugin/relativeTime'
import CustomParseFormat from 'dayjs/plugin/customParseFormat'
import 'dayjs/locale/pl'
import parse from 'html-react-parser'

dayjs.extend(UTC)
dayjs.extend(RelativeTime)
dayjs.extend(CustomParseFormat)
dayjs.locale('pl')

const News = ({news, users}) => {
  console.log(users)
    const { title, img, href, tags, created_at} = news
    let date;
    
    if (created_at.includes(',')) {
      date = dayjs(created_at, 'D.MM.YYYY, HH:mm').fromNow()
    } else {
      date = dayjs(created_at).fromNow()
    }

  return (
    <Container>
        <div style={{position:'relative', width: '100%'}}>
        <ImgContainer>
          <a href={users ? `/users/news/${href}` :`/news/${href}`}>
            <img src={img} />
          </a>
        </ImgContainer>
        <DateContainer>
          <Date>
            <p>{date}</p>
          </Date>
        </DateContainer>
        </div>
        <div>
            <a href={users ? `/users/news/${href}` :`/news/${href}`}>{parse(title || '')}</a>
        </div>
    </Container>
  )
}

export default News