import styled from 'styled-components'
import {Link} from 'react-router-dom';

export const Nav = styled.nav`
    background-color: #eab023;
    display: flex; 
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    
`;

export const Logo = styled.p`
    font-size: 22px;
    text-decoration: none;
    color: #000;
    margin:0;
`;

export const NavItems = styled.ul`
    display:flex;
    gap:1rem;
    list-style: none;
    margin:0;
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    color: #000;
    font-size: 18px;
`;

export const DarkModeBtn = styled.a`
    border: none; 
    background: transparent;
    font-size: 18px;
    text-decoration: none;
    color: #000;
`;

