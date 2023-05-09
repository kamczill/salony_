import React, {useState} from 'react'
import Cookies from 'js-cookie'

import TextEditor from '../../components/TextEditor'
import LoginForm from '../../components/LoginForm'

import { Container } from '../../components/styles/Panel.styled'

const Panel = () => {

  const [isAuth, setIsAuth] = useState(Cookies.get('logged_in') === 'true' ? true : false);
  

  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <Container>
            {isAuth ? <TextEditor /> : <LoginForm />}
        </Container>
    </div>
  )
}


export default Panel