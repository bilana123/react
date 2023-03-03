import { useState } from "react";

export const Register =(props) => {
    const [Email, setEmail]= useState('');
    const [pass, setPass] = useState ('');
    const [Name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log (Email);
    }

    return(
<div className="auth-form-container">
    <h2>Register</h2>

<form onSubmit={handleSubmit} >
    <label htmlfor="Name">Full name</label>
    <input value={Name} Name="Name"id="Name" placeholder="Full name"/><br></br>
    <label htmlfor="Email">Email</label>
    <input value={Email} onChange={(e) => setEmail(e.target.value)} type="Email" placeholder="youemail@gmail.com" id="email" name="Email"/><br></br>
    <label htmlfor="password">password</label>
    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="******" id="password" name="password"/><br></br>
    <button type="Submit">Login</button>
</form>
<button onClick={() => props.onFormSwitch('Login')}>Already have an account?Login here.</button>
</div>

        
    )
}