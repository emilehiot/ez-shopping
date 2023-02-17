import {Nav, Container, NavItems, NavLink, Logo} from '../style/navbar';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../reducers/UserSlice';
import { useEffect } from 'react';
import { switchTheme } from '../reducers/DarkModeSlice';

function Navbar() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);
    
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
                        <NavLink to={"/profil"}>👨 {user.user.username}</NavLink>
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