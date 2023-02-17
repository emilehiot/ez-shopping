
import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const Nav = styled.nav`
    background-color: #eab023;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
                rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

export const Container = styled.div`
    display: flex;
    max-width: 1760px;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    padding: 1rem 1rem;
`;

export const Logo = styled.p`
    font-size: 26px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    color: #000;
    margin: 0;
`;

export const NavItems = styled.ul`
    display: flex;
    gap: 1rem;
    list-style: none;
    margin: 0;
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
