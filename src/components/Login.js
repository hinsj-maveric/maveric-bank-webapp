import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
    }

  return (
    <>
        <div className='login'>
            <form onSubmit={handleSubmit}>
                <div className='input-container'>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' id="email" name='email' required></input>
                </div>

                <div className='input-container'>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" placeholder='Password' required></input>
                </div>
                
                <div className='button-container'>
                    <button type='submit'>Login</button>
                </div>
            </form>
            <div className='input-container'>Don't have an account? <Link to="/signup">Signup</Link></div>
        </div>
    </>
  )
}

export default Login