import {Nav, Container, NavItems, NavLink, Logo, DarkModeBtn} from '../style/navbar';

function Navbar() {
    return (
        <Nav>
            <Container>
                <NavLink to={"/"}>
                    <Logo>EZ Shopping</Logo>
                </NavLink>
                <NavItems>
                    <li>
                        <NavLink to={"/profil"}>👨 Profil (Todo : api)</NavLink>
                    </li>

                    <li>
                        <NavLink to={"/card"}>🛒 0 Items (Todo : api)</NavLink>
                    </li>
                        <DarkModeBtn href='#'>🌚 Dark mode (Todo : feat on/off)</DarkModeBtn>
                </NavItems>
            </Container>
        </Nav>
    )
}

export default Navbar