import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Profil from "./pages/Profil"
import ShoppingCart from "./pages/ShoppingCard.jsx"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }
`;

function App() {
  return (
      <>
          <GlobalStyle />
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profil" element={<Profil />} />
                <Route path="/card" element={<ShoppingCart />} />
              </Routes>
          </BrowserRouter>
      </>
  )
}

export default App
