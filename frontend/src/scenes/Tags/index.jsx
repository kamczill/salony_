import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import styled from 'styled-components'
import theme from '../../theme'
import axios from 'axios'
import News from '../../components/News'
import Advert from '../../components/Advert'


const Tags = () => {
  const { tag } = useParams()
  const [news, setNews] = useState([])
  const [tags, setTags] = useState([])


  const getNewsByTag = async () => {
    await axios.get(`http://127.0.0.1:8001/tags/${tag}`)
      .then(res => {
        setNews(res?.data)
        const tagsArr = [res?.data?.map(news => news.tags)]
        setTags([...new Set(tagsArr.flat(2))])
      })
  }

  useEffect(() => {
    getNewsByTag();
  }, [])

  return (
    <>
      <Container>
      <Advert />
          <NewsContainer>
            <LeftContainer>
              <h2>#{tag}</h2>
              {news?.map((el) => (
                <News news={el}/>
              ))}
            </LeftContainer>
            <RightContainer>
                <h2>Pasujące tagi</h2>
                {tags?.map(news => (
                  <a href={`/tags/${news}`}><h3>#{news}</h3></a>
                ))}
            </RightContainer>
          </NewsContainer>
      </Container>
    </>        
  )
}

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const LeftContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

const Container = styled.div`
  width: 100%;
  /* max-width: 1600px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  
  h2{
    font-family: ${theme.fonts.outfit};
    font-size: ${theme.fontSizes.lg};
  }

  h3{
        font-family: ${theme.fonts.cabin};
    }

  a{
        color: black;
        text-decoration: none;

        &:hover{
            text-decoration: underline;
        }
    }
`


const NewsContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  display: grid;
  grid-template-columns: 1fr;
  gap:10rem;
  /* justify-content: center; */
  padding: 1rem;
  margin-top: 2.5rem;

  @media (min-width: ${theme.breakpoints.desktop}){
    grid-template-columns: 2fr 1fr;
    /* padding: 0rem; */
    margin-top:3rem;
  }

  @media (min-width: 1400px){
    padding: 0;
  }

`

export default Tags