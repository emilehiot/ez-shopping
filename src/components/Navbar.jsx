import {Nav, NavItems, NavLink, Logo, DarkModeBtn} from '../style/navbar';

function Navbar() {
    return (
        <Nav>
            <NavLink to={"/"}>
                <Logo>EZ Shopping</Logo>
            </NavLink>
            <NavItems>
                <li>
                    <NavLink to={"/profil"}>👨 Profil</NavLink>
                </li>
                <li>
                    <NavLink to={"/cart"}>🛒 Items</NavLink>
                </li>
                    <DarkModeBtn href='#'>🌚 Dark mode</DarkModeBtn>
            </NavItems>
        </Nav>
    )
}

export default Navbar