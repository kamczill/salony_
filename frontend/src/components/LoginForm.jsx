import React from 'react'
import logo from '../google.png'
import { Container, Button } from './styles/LoginForm.styled'

const LoginForm = () => {

    const login = async () => {
        window.location.replace('http://127.0.0.1:8001/login')
      }

    return (
        <Container>
            <h2>Aby złożyć donos musisz być zalogowany!</h2>
            <Button onClick={() => login()}>Zaloguj się przez Google <img src={logo}/></Button>
        </Container>
    )
}

export default LoginForm