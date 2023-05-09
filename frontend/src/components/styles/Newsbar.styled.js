import styled from "styled-components"
import theme from "../../theme";

export const NewsbarContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 2rem;
    padding: 1.5rem .8rem;
    background-color: ${theme.colors.lightgrey};
    width:100%;
    overflow-x: hidden;
    
    div{
-moz-transform: translateX(100%);
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
  
  -moz-animation: my-animation 35s linear infinite;
  -webkit-animation: my-animation 35s linear infinite;
  animation: my-animation 35s linear infinite;
}

/* for Firefox */
@-moz-keyframes my-animation {
  from { -moz-transform: translateX(100%); }
  to { -moz-transform: translateX(-100%); }
}

/* for Chrome */
@-webkit-keyframes my-animation {
  from { -webkit-transform: translateX(100%); }
  to { -webkit-transform: translateX(-100%); }
}

@keyframes my-animation {
  from {
    -moz-transform: translateX(0%);
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }
  to {
    -moz-transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
    }

    div:nth-child(1){
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        gap: 5rem;
    }

    h2{
        font-family: ${theme.fonts.outfit};
        font-weight: 600;
        font-size: ${theme.fontSizes.md};
        overflow: hidden;
        white-space: nowrap;
    }
`