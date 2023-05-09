import React, {useState, useEffect} from 'react'
import axios from 'axios'

import News from './News';
import Newsbar from './Newsbar';
import { Container, LeftContainer, RightContainer, TopNewsContainer, Button, ButtonsContainer } from './styles/NewsList.styled';

const NewsList = () => {

    const [freshNews, setFreshNews] = useState();
    const [usersNews, setUsersNews] = useState();
    const [isFreshNews, setIsFreshNews] = useState(true);
    const [tags, setTags] = useState([])


    const getFreshNews = async() => {
        await axios('http://127.0.0.1:8001/news/fresh-news')
            .then((res) => {
                setFreshNews(res?.data)
                const tagsArr = [res?.data?.map(news => news.tags)]
                setTags([...new Set(tagsArr.flat(2))])
            })
            .catch(err => console.log(err))
    }

    const getUsersNews = async () => {
        await axios('http://127.0.0.1:8001/users-news')
            .then((res) => {
                setUsersNews(res?.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getFreshNews();
        // getUsersNews();
        console.log(tags)
    }, [])

  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap: '3rem'}}>
        <div style={{maxWidth: '1600px'}}>
            <TopNewsContainer>
                {freshNews?.slice(0,3).map((news) => (
                    <News news={news}/>
                )
                )}
            </TopNewsContainer>
        </div>
        <Newsbar newsTitles={freshNews?.slice(4, 8).map(news => news?.title)}/>
        <Container>
            <LeftContainer>
                <ButtonsContainer>
                <Button onClick={() => setIsFreshNews(true)} isFreshNews={isFreshNews}>Główna</Button>
                <Button onClick={() => {setIsFreshNews(false); getUsersNews()}} isFreshNews={isFreshNews}>Od fanów</Button>
                </ButtonsContainer>
                {isFreshNews ? (
                    <>
                    {freshNews?.slice(3).map(news => (
                        <News news={news} />
                    ))}
                    </>
                ) : (
                    <>
                    {usersNews?.map(news => (
                        <News news={news} users/>
                    ))}
                    </>
                )}
                
            
            </LeftContainer>
            <RightContainer>
                <h1>Popularne Tagi</h1>
                {tags?.map(news => (
                    <a href={`/tags/${news}`}><h3>#{news}</h3></a>
            ))}
            </RightContainer>
        </Container>
    </div>
  )
}

export default NewsList