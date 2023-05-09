import styled from "styled-components";
import theme from "../../theme";



export const ImgContainer = styled.div`
    width: 100%;
    height: 220px;
    position: relative;
    overflow: hidden;
    
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all .3s;
        transform: scale(1);
        display: block;
        filter: grayscale(70%);
    }

    &:hover {
        img{
            transform: scale(1.1);
            filter: grayscale(30%);
        }
    }

    @media (min-width: ${theme.breakpoints.tablet}){
        height: 330px;
    }

    
`
export const DateContainer = styled.div`
    position: absolute;
    bottom: -0.75rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Date = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .3rem 2rem;
    background-color: white;
    border: 2px solid black;

    -webkit-box-shadow: -12px 12px 0px -4px rgba(0, 0, 0, 1);
    -moz-box-shadow: -12px 12px 0px -4px rgba(0, 0, 0, 1);
    box-shadow: -8px 8px 0px -4px rgba(0, 0, 0, 1);
    
    p{
        text-align: center;
        font-family: ${theme.fonts.outfit};
        font-weight: 600;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1.5rem;
    width: 100%;
    
    /* height: 100%; */
    /* max-width: 400px; */

    a{
        text-decoration: none;
        color: black;

        &:hover {
            text-decoration: underline;
        }
    }
    
    h2{
        font-family: ${theme.fonts.outfit};
        font-size: ${theme.fontSizes.md};
        font-weight: 200;

        b{
        }
    }

    /* h2{
        font-weight: 500;
        font-family: ${theme.fonts.cabin};
        font-size: ${theme.fontSizes.md};
    } */


    &:nth-child(2){
        @media (min-width: ${theme.breakpoints.desktop}) {
            ${ImgContainer} {
                height: 500px;
            }
        }
    }

`