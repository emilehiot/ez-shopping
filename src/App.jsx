import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Profil from "./pages/Profil"
import ShoppingCart from "./pages/ShoppingCard.jsx"
import styled, { ThemeProvider } from 'styled-components';
import {lightTheme, darkTheme, GlobalStyle} from "./style/themes";
import {useSelector} from "react-redux";


const StyledApp = styled.div`
    
`;

function App() {

    const themeDark = useSelector(state => state.darkMode.darkTheme);
    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
        themeDark === 'light' ? setTheme('dark') : setTheme('light');
    };


  return (
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <StyledApp>

          <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profil" element={<Profil />} />
                <Route path="/card" element={<ShoppingCart />} />
              </Routes>
          </BrowserRouter>

      </StyledApp>
      </ThemeProvider>
  )
}

export default App