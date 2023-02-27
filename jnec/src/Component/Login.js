import React, {useState} from "react";

export const Login = (props) => {
   
    const[Email,setEmail] = useState('');
    const[Pass,setPass] = useState ('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(Email);
    }


    return (
        <div className="auth-form-container">
        <form className="login-form"onSubmit={handleSubmit}>
            <label htmlfor="Email">Email</label>
            <input value={Email} onChange={(e) => setEmail(e.target.value)} type="Email" placeholder="yourEmail"/>
            <label htmlfor="Password">Password</label>
            <input value={Pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*****"/>
            <button type="submit">Login</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('Register')}>Don't have an account? Register here</button>
        </div>
    );
} 
 