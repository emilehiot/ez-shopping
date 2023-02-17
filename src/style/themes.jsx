import {createGlobalStyle} from "styled-components";

export const lightTheme = {
    body: '#FFF',
    color: '#000',

 }

 export const darkTheme = {
    body: '#000',
    color: '#FFF',
 }

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    
    background-color: ${(props) => props.theme.body};
  }
`;