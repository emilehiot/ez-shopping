import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Profil from "./pages/Profil"
import ShoppingCart from "./pages/ShoppingCard.jsx"
import { ThemeProvider } from 'styled-components';
import {lightTheme, darkTheme, GlobalStyle} from "./style/themes";
import {useSelector} from "react-redux";
import { createGlobalStyle } from "styled-components"
import { profilContext } from "./context/ProfilContext";


function App() {

    const themeDark = useSelector(state => state.darkMode.darkTheme);

    const [firstname, setFirstname] = useState("John");
    const [lastname, setLastname] = useState("Doe");
    const [email, setEmail] = useState("test@email.com");
    const [showProfil, setShowProfil] = useState(false);

  return (
      <>
          <profilContext.Provider value={{firstname, setFirstname, showProfil, setShowProfil, lastname, setLastname, email, setEmail}}>
          <ThemeProvider theme={themeDark === "light" ? lightTheme : darkTheme}>
          <GlobalStyle />
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profil" element={<Profil />} />
                <Route path="/card" element={<ShoppingCart />} />
              </Routes>
          </BrowserRouter>
          </ThemeProvider>
          </profilContext.Provider>
      </>
  )
}

export default App