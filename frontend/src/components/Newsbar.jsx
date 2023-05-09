import React, {useState} from 'react'
import { NewsbarContainer } from './styles/Newsbar.styled'
import parse from 'html-react-parser'

const Newsbar = ({newsTitles}) => {
    const [titles, setTitles] = useState(newsTitles)
  return (
    <NewsbarContainer>
        <div>
            <div>
                {newsTitles?.map(title => <h2>{parse(title || '')}</h2>)}
            </div>
        </div>
    </NewsbarContainer>
  )
}

export default Newsbar