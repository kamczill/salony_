import styled from "styled-components";
import theme from "../../theme";

export const NewsPageHeader = styled.div`
    width: 100%;
    max-width: 1400px;
    display: flex;
    flex-direction: 'row';
    justify-content: space-between;
    margin-top: 3rem;

    h3{
        font-family: ${theme.fonts.outfit};
        font-size: ${theme.fontSizes.md};
        font-weight: 200;
        margin:0 2rem;
    }
    

`
export const Title = styled.div`
    width: 100%;
    max-width: 1400px;
    padding: 0 2rem 2rem 2rem;
    border-bottom: 1px solid ${theme.colors.silver};

    h1{
        font-family: ${theme.fonts.outfit};
        font-size: ${theme.fontSizes.xl};
        font-weight: 200;

        b{
        }
    }
    
    h2{
        font-family: ${theme.fonts.outfit};
        font-size: ${theme.fontSizes.xl};
        font-weight: 200;

        b{
        }
    }
`

export const Content = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
padding: 2rem;
width:100%;
max-width: 1000px;

    img{
        /* min-width: 500px; */
        /* width: 50%; */
        max-height: 700px;
        object-fit: contain;
    }

    p{
        font-size: ${theme.fontSizes.base};
    }
`