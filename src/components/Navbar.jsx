import {Nav, Container, NavItems, NavLink, Logo, DarkModeBtn} from '../style/navbar';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../redux/UserSlice';
import { useEffect } from 'react';

function Navbar() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);
    
    console.log(user.user.username);
    return (
        <Nav>
            <Container>
                <NavLink to={"/"}>
                    <Logo>EZ Shopping</Logo>
                </NavLink>
                <NavItems>
                    <li>
                        <NavLink to={"/profil"}>👨 {user.user.username}</NavLink>
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