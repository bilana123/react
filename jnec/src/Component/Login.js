import { Button } from "bootstrap"
import React, {useState} from "react";
export const Login =(props) => {

    const [Email, setEmail]= useState('');
    const [pass, setPass] = useState ('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log (Email);

    }
    return(
        <div className="auth-form-container">
         <h2>Login</h2>
        <form onSubmit={handleSubmit} >
            <label for="Email">Email</label>
            <input value={Email} onChange={(e) => setEmail(e.target.value)} type="Email" placeholder="youemail@gmail.com" id="email" name="Email"/><br></br>
            <label for="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="******" id="password" name="password"/><br></br>
            <button type="Submit">Login</button>
        </form>
        <button onClick={() => props.onFormSwitch('Register')}>Don't have an account?Register here.</button>
        </div>
       
    )
}