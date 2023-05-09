import styled from "styled-components";
import theme from "../../theme";

export const TopNewsContainer = styled.main`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.2rem;
    margin:1rem;

    @media (min-width: ${theme.breakpoints.desktop}) {
        grid-template-columns: 1fr 2fr 1fr;
        /* gap: 2rem 3rem; */
    }
    
`

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem 3rem;
    justify-items: center;
    margin: 1rem;
    max-width: 1600px;

    @media (min-width: ${theme.breakpoints.desktop}) {
        grid-template-columns: 3fr 2fr;
    }
`

export const LeftContainer = styled.div`
    max-width: 650px;
    display: flex;
    flex-direction: column;
    gap: 4rem;
`

export const RightContainer = styled.div`
    max-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h1{
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

export const Button = styled.button`
    padding: .5rem 1rem;
    border-radius: 10px;

    &:nth-of-type(1){
        background: ${props => props.isFreshNews ? theme.colors.silver : 'white'};
        transform: ${props => props.isFreshNews ? 'scale(0.95)' : ''};
    }

    &:nth-of-type(2){
        background: ${props => props.isFreshNews ? 'white': theme.colors.silver};
        transform: ${props => props.isFreshNews ? '': 'scale(0.95)'};
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`