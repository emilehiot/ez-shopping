import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Profil from "./pages/Profil"
import ShoppingCart from "./pages/ShoppingCard.jsx"
import { createGlobalStyle } from "styled-components"
import { profilContext } from "./context/ProfilContext"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }
`;

function App() {
  const [firstname, setFirstname] = useState("John");
  const [lastname, setLastname] = useState("Doe");
  const [email, setEmail] = useState("test@mail.com");
  const [showProfil, setShowProfil] = useState(false);

  return (
      <>
        <profilContext.Provider value={{firstname, setFirstname, showProfil, setShowProfil, lastname, setLastname, email, setEmail}}>
          <GlobalStyle />
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profil" element={<Profil />} />
                <Route path="/card" element={<ShoppingCart />} />
              </Routes>
          </BrowserRouter>
        </profilContext.Provider>
      </>
  )
}

export default App
