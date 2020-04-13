import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import './Login.css';

export default function Login(props) {    
    const [user, setUser] = useState("");
    const [pass, setPassword] = useState(""); 
    const rePass = '^(?!.* )(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$';
    const reUser = '^(?!.* ).{8,20}$';
    const history = useHistory();
    
    function validateForm() {            
        return pass.match(rePass) && user.match(reUser);
    }

    function handleSubmit(e) {        
        e.preventDefault();
        localStorage.setItem('userName', user);
        history.push("/home");
    }

    return (
        <div className="Login">            
            <form onSubmit={handleSubmit}>
                <div className="Title"><h2>Login</h2></div>
                <FormGroup controlId="user" bsSize="large">                    
                    <FormControl
                        autoFocus
                        //className={!shouldBeError('user') ? "error" : ""}
                        type="text"
                        value={user}
                        placeholder="Username"                        
                        onChange={e => setUser(e.target.value)}                        
                    />
                </FormGroup>
                <FormGroup controlId="pass" bsSize="large">                    
                    <FormControl                        
                        //className={!shouldBeError('user') ? "error" : ""}
                        type="Password"
                        value={pass}
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}                        
                    />                    
                </FormGroup>
                <Button block disabled={!validateForm()} bsSize="large" type="submit">
                    Login
               </Button>
            </form>
        </div>
    );
}