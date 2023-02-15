import React from 'react';
import Navbar from '../components/Navbar';
import {Inputs, Container, Btn, HomeContainer, Title, Form} from '../style/profil.jsx';



function Profil() {
    return (
        <div>
            <Navbar />
            <HomeContainer>
                <Container>
                    <Title>Hi, (Todo : api) 👋 !</Title>
                    <h3>Customize your profile</h3>
                    <Form action="">
                        <Inputs>
                            <label htmlFor="firstname">Your firstname: </label>
                            <input type="text" name='firstname' id='firstname'/>
                        </Inputs>
                        <Inputs>
                            <label htmlFor="lastname">Your lastname: </label>
                            <input type="text" name='lastname' id='lastname'/>
                        </Inputs>
                        <Inputs>
                            <label htmlFor="email">Your email: </label>
                            <input type="email" name='email' id='email'/>
                        </Inputs>
                        <Btn>Save</Btn>
                    </Form>
                </Container>
            </HomeContainer>
        </div>
        
    )
}

export default Profil