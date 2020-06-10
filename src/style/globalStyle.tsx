import { createGlobalStyle } from "styled-components";
import { normalize } from 'styled-normalize'
import resetStyle from './resetStyle'


export const GlobalStyle = createGlobalStyle`
    html {
    font-family: 'Noto Sans TC', 'Noto Sans JP', Helvetica, Arial, sans-serif;
    *{
      &:focus {
         outline-width: 0; 
      }  
    }
    }
    ${normalize}
    ${resetStyle}
`;