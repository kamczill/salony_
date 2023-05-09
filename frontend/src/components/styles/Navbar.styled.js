import styled, { useTheme } from "styled-components";
import theme from "../../theme";

export const StyledHeader = styled.header`
    background-color: white;
    width:100%;
    padding: 1rem 2rem;
    position: relative;
`

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width:100%;
    
    padding-bottom: 2rem;
    border-bottom: 1px solid ${theme.colors.silver};

    @media (min-width: ${theme.breakpoints.desktop}){
        display: grid;
        grid-template-columns: repeat(3, 1fr);

    }
`

export const Menu = styled.div`

    @media screen and (min-width: ${theme.breakpoints.desktop}){
        display: none;
    }
`

export const Logo = styled.div`
    width: 100%;
    justify-self: center;
    align-self: center;
    font-family: ${theme.fonts.outfit};

    h2{
        font-size: ${theme.fontSizes.xl};
        text-align: center;
    }

    a{
        text-decoration: none;
        color: black;
    }
    
    @media (min-width: ${theme.breakpoints.desktop}) {
        grid-column-start: 2
    }
`

export const OpenedMenu = styled.div`
    position: absolute;
    top:4rem;
    left:0;
    width: 100%;
    padding: 2rem;
    background-color: white;
    z-index: 2;
    -webkit-box-shadow: 0px 45px 37px -31px rgba(75, 75, 80, 1);
-moz-box-shadow: 0px 45px 37px -31px rgba(75, 75, 80, 1);
box-shadow: 0px 45px 37px -31px rgba(75, 75, 80, 1);

    p{
        font-family: ${theme.fonts.cabin};
        margin: 1rem;
    }

    h2{
        text-align: center;
    }
`

export const User = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    padding:0;
    margin:0;
    img{
        width: 2.2rem;
        border-radius: 20px;
    }

    img:hover{
        -webkit-box-shadow: 1px 8px 10px -7px rgba(66, 68, 90, 1);
    -moz-box-shadow: 1px 8px 10px -7px rgba(66, 68, 90, 1);
    box-shadow: 1px 8px 10px -7px rgba(66, 68, 90, 1);
    }

    img:active{
        transform: scale(0.95);
    }

    a{
        height: 35px;
    }

    @media (min-width: ${theme.breakpoints.desktop}){
        align-self: flex-end;
        justify-self: flex-end;
    }
`

export const Href = styled.a`
    margin: 0;
	padding: 0;
	border: 0;
    height: auto;
    text-decoration: none;
    color: black;
    font-family: ${theme.fonts.cabin};

    &:hover{
        color: ${theme.colors.silver}
    }
`
export const TooltipContainer = styled.div`
    position: relative;

    button{
        border: none;
        background: none;
    }
`

export const Tooltip = styled.div`
    
    position: absolute;
    right: 0;
    width: 200px;
    max-width: 200px;
    margin-top:.2rem;
    z-index: 10;
    font-family: ${theme.fonts.outfit};

    a{
        text-decoration: none;
        color: inherit;
    }

    ul{
        list-style-type: none;
    }

    li{
        text-decoration: none;
        text-align:center;
        color: white;
        padding: 1rem;
        background-color: grey;
        cursor:pointer;
    }

    li:nth-of-type(1){
        border-radius: 10px 10px 0 0;
    }
    
    li:nth-of-type(2){
        border-radius: 0 0 10px 10px;
    }

    li:hover{
        background-color: ${theme.colors.lightgrey};
    }


    li:nth-of-type(1){
        border-bottom: 1px solid black;
    }

    &::after{
        content: " ";
        position: absolute;
        bottom: 97%;  /* At the top of the tooltip */
        left: 89%;
        margin-left: -5px;
        border-width: 10px;
        border-style: solid;
        border-color: transparent transparent grey transparent;
        z-index: -1;
    }
`