import styled from "styled-components";
import theme from '../../theme';

export const PartnersContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    h3{
        position: absolute;
        top: 2rem;
        left:0;
        right:0;
        text-align: center;
        color: ${theme.colors.silver};
    }
`

export const Partners = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    

    div{
        width:100%;
        max-width: 200px;
    }
    img{
        max-width: 100%;
    }

    @media (min-width: ${theme.breakpoints.desktop}){
        flex-direction: row;
    }
`

export const Contact = styled.div`
    margin-top: 1.5rem;
    p{
        font-family: ${theme.fonts.outfit};
    }
`

export const Logo = styled.div`
    
    h2{
        font-family: ${theme.fonts.outfit};
        font-weight: 300;
        font-size: ${theme.fontSizes.xxl};
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    background-color: black;
    color: white;
    padding: 2rem;

    @media (min-width: ${theme.breakpoints.desktop}){
        flex-direction: row;
        justify-content: space-around;
        padding:0;
        
        h3{
            display: none;
        }
    }
    
`