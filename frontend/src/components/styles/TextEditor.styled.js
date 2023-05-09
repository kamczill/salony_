import styled from "styled-components";
import theme from '../../theme'

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .5rem;
  width: 100%;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: .5rem;
  width: 80%;
  
  @media(min-width: ${theme.breakpoints.tablet}){
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

  }
`

export const Button = styled.button`
  background: none;
  padding: .5rem;
  border: 1px solid ${theme.colors.silver};
  border-radius: 6px;
  width: 60%;
  max-width: 190px;
  font-size: ${theme.fontSizes.base};

  &:hover{
    background-color: ${theme.colors.silver};
  }

  &:active{
    transform: scale(0.90);
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
`
export const Content = styled.textarea`
  width: 80%;
  height: 80vh;
  padding: 1rem;
  overflow: hidden;
  resize: vertical;
`

export const Textarea = styled.textarea`
  width: 80%;
  max-width: 800px;
  overflow: hidden;
  resize: vertical;
`

export const Input = styled.input`
  width: 80%;
  max-width: 800px;
  padding: .5rem 1rem;
`

export const Container = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
  font-family: ${theme.fonts.cabin};

  p{
    color: red;
  }

  h1{
    font-size: ${theme.fontSizes.xl};
    font-family: ${theme.fonts.cabin};
    margin-bottom: 3rem;
  }

`