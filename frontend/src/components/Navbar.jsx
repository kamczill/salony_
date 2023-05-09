import React, {useEffect, useState} from 'react'
import { StyledHeader, Nav, Menu, Logo, OpenedMenu, User, Href, TooltipContainer, Tooltip} from './styles/Navbar.styled'
import { Menu as MenuIcon } from '@styled-icons/entypo/Menu'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import Cookies from 'js-cookie'
import axios from 'axios'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAuth, setIsAuth] = useState(Cookies.get('logged_in') == 'true' ? true : false);
    const [isTooltipOpen, setIsTooltipOpen] = useState(false);
    const [userInfo, setUserInfo] = useState('');

    const getUserInfo = async () => {
        await axios.get('http://127.0.0.1:8001/me', {withCredentials: true})
            .then(res => setUserInfo(res?.data))
            .catch(err => console.log(err))
    }

    const logout = () => {
        window.location.replace('http://127.0.0.1:8001/logout')
    }

    useEffect(() => {
        if (isAuth){
            getUserInfo()
        }
        
    }, [])

  return (
    <StyledHeader>
        <Nav>
            <Menu>
                <div onClick={() => setIsMenuOpen(prev => !prev)}>{isMenuOpen ? <CloseOutline size='2rem'/> : <MenuIcon size='2rem'/>}</div>
            </Menu>
            <Logo>
                <a href='/'>
                    <h2>Salony</h2>
                </a>
            </Logo>
            <User>
                {isAuth ? (
                    <>
                    <TooltipContainer>
                    <button onClick={() => setIsTooltipOpen(prev => !prev)}><img src={userInfo?.picture} alt={userInfo?.name}/></button>
                    {isTooltipOpen &&
                    (<Tooltip>
                        <ul>
                            <li><a href='/panel'>Dodaj Newsa</a></li>
                            <li onClick={() => logout()}>Wyloguj się</li>

                        </ul>
                    </Tooltip>
                    )}
        
                    </TooltipContainer>
                    </>
                ): (
                    <Href href='/panel'><h3>Zaloguj się</h3></Href>
                )}
            </User>
        </Nav>
        
        {isMenuOpen && <OpenedMenu>
            <div>
                <h2>Witaj w serwisie SALONY.PL!</h2>

                <p>Jesteśmy portalem, który zajmuje się redagowaniem newsów i plotek ze świata influencerów oraz show biznesu. 
                Naszym celem jest dostarczenie czytelnikom najświeższych informacji o gwiazdach polskiego i zagranicznego 
                show biznesu, gorących plotkach, zdjęciach ze ścianek oraz paparazzi - głównie związanych 
                z szerokopojętym influencer marketingiem.</p>

                <p>
                Nasze źródła są najlepsze w branży, a my zawsze staramy się przekazywać informacje w sposób rzetelny 
                i zgodny z prawdą. Dzięki nam możecie poznać kulisy życia influencerów i dowiedzieć się więcej 
                o ich codziennych problemach oraz sukcesach. Zapraszamy do regularnego odwiedzania naszego portalu, 
                gdzie znajdziecie najświeższe i najciekawsze informacje ze świata influencerów i show biznesu!
                </p>
            </div>
        </OpenedMenu>}
    </StyledHeader>
  )
}


export default Navbar