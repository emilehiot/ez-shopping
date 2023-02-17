import React, { createContext, useContext, useState } from 'react';
import Navbar from '../components/Navbar';
import {Inputs, Container, Btn, HomeContainer, Title, Form} from '../style/profil.jsx';
import { profilContext } from '../context/ProfilContext';

function Profil() {

    const {firstname, setFirstname, lastname, setLastname, email, setEmail, setShowProfil, showProfil } = useContext(profilContext);

    const [newFirstname, setNewFirstname] = useState("");
    const [newLastname, setNewLastname] = useState("");
    const [newEmail, setNewEmail] = useState("");
    


    function handleSubmit(e) {
        e.preventDefault();
        setShowProfil(true);
        setFirstname(newFirstname);
        setLastname(newLastname);
        setEmail(newEmail)
        console.log()
    }

    return (
        <div>
            <Navbar />
            <HomeContainer>
                <Container>
                    <Title> {showProfil ? `Hi, ${firstname} ${lastname} 👋!` : "Hi 👋! " } </Title>
                    <h3>Customize your profile</h3>
                    <Form onSubmit={handleSubmit}>
                        <Inputs>
                            <label htmlFor="firstname">Your firstname: </label>
                            <input type="text" name='firstname' id='firstname' onChange={(e) => setNewFirstname(e.target.value)} value={newFirstname} placeholder={firstname}/>
                        </Inputs>
                        <Inputs>
                            <label htmlFor="lastname">Your lastname: </label>
                            <input type="text" name='lastname' id='lastname' onChange={(e) => setNewLastname(e.target.value)} value={newLastname} placeholder={lastname}/>
                        </Inputs>
                        <Inputs>
                            <label htmlFor="email">Your email: </label>
                            <input type="email" name='email' id='email' onChange={(e) => setNewEmail(e.target.value)} value={newEmail} placeholder={email}/>
                        </Inputs>
                        <Btn>Save</Btn>
                    </Form>
                </Container>
            </HomeContainer>
        </div>
        
    )
}

export default Profil