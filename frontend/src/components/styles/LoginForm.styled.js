import styled from "styled-components";
import theme from '../../theme'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    h2{
        font-family: ${theme.fonts.cabin};
        text-align: center;
    }
`


export const Button = styled.button`
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: .5rem;
    border: 1px solid;
    border-radius: 5px;
    font-family: ${theme.fonts.cabin};
    font-size: ${theme.fontSizes.base};
    cursor: pointer;

    img{
        width:2rem
    }

    &:active{
        transform: scale(0.95);
        background-color: ${theme.colors.lightgrey};
    }
`