import React, {useState} from "react";
import { Login } from "./Login";

export const Register = (props) => {

    const[Email, setEmail] = useState('');
    const[Pass, setPass] = useState ('');
    const[Name, setName]= useState('');
    
     const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(Email);
    }
  return (
         <div className="auth-form-container">
        <form className="Register-form" onSubmit={handleSubmit}>
            <label>Full_Name</label>
            <input value={Name} name="Name" id="Name" placeholder="full_Name" />
            <label htmlfor="Email">Email</label>
            <input value={Email} onChange={(e) => setEmail(e.target.value)} type="Email" placeholder="your Email"/>
            <label htmlfor="Password">Password</label>
            <input value={Pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*****"/>
            <button type="submit">Login</button>
        </form>
        <button className="link-btn"onClick={() => props.onFormSwitch('Login')}> Already have an account? Login here</button>''
        </div>
    ); 
    
    }

