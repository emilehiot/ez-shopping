import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import {Inputs, Container, Btn, HomeContainer, Title, Form} from '../style/profil.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../redux/UserSlice';
import { useEffect } from 'react';



function Profil() {
    const [newFirstname, setNewFirstname] = useState("");
    const [newLastname, setNewLastname] = useState("");
    const [newEmail, setNewEmail] = useState("");

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);

    function handleSubmit() {

    }

    return (
        <div>
            <Navbar />
            <HomeContainer>
                <Container>
                    <Title>Hi, {user.user.username} 👋 !</Title>
                    <h3>Customize your profile</h3>
                    <Form>
                        <Inputs>
                            <label htmlFor="firstname">Your firstname: </label>
                            <input type="text" name='firstname' id='firstname' onChange={(e) => setNewFirstname(e.target.value)}/>
                        </Inputs>
                        <Inputs>
                            <label htmlFor="lastname">Your lastname: </label>
                            <input type="text" name='lastname' id='lastname' onChange={(e) => setNewLastname(e.target.value)}/>
                        </Inputs>
                        <Inputs>
                            <label htmlFor="email">Your email: </label>
                            <input type="email" name='email' id='email' onChange={(e) => setNewEmail(e.target.value)}/>
                        </Inputs>
                        <Btn>Save</Btn>
                    </Form>
                </Container>
            </HomeContainer>
        </div>
        
    )
}

export default Profil