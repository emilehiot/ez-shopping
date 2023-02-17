import {Nav, Container, NavItems, NavLink, Logo} from '../style/navbar';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { switchTheme } from '../reducers/DarkModeSlice';
import { useContext, useState } from 'react';
import { profilContext } from '../context/ProfilContext';

function Navbar() {

    const {firstname, lastname, showProfil} = useContext(profilContext);
    // console.log(user.user.username);
    const handleDarkMode = () => {
        dispatch(switchTheme(false))
    }

    return (
        <Nav>
            <Container>
                <NavLink to={"/"}>
                    <Logo>EZ Shopping</Logo>
                </NavLink>
                <NavItems>
                    <li>
                        <NavLink to={"/profil"}>{showProfil ? `👨 ${firstname} ${lastname}` : "👨 Votre profil"} </NavLink>
                    </li>

                    <li>
                        <NavLink to={"/card"}>🛒 0 Items (Todo : api)</NavLink>
                    </li>
                        <button onClick={handleDarkMode} href='#'>🌚 Dark mode (Todo : feat on/off)</button>
                </NavItems>
            </Container>
        </Nav>
    )
}

export default Navbar