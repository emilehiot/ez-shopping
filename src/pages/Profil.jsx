import React from 'react'
import Navbar from '../components/Navbar'
import { Inputs, Container, Btn} from '../style/profile'


function Profil() {
    return (
        <div>
            <Navbar />
            <Container>
                <h1>Hi, nom !</h1>
                <h3>Customize your profile</h3>
                <form action="">
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
                </form>
            </Container>    
        </div>
        
    )
}

export default Profil