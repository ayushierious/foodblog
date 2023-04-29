import React, {useState} from 'react';
import {auth} from '../../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const signUp=(e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            console.log(userCredential)
        }).catch((error)=>{
            console.log(error)
        })
    }
    
  return (
    <div className='sign-in-container' >
        <form onSubmit={signUp}>
            <h1>Create Account</h1>
            <input 
            type='email' 
            placeholder='Type your email' 
            value={email}
            onChange={(e)=>setEmail( e.target.value)}>

            </input>
            <input
             type='password' 
             placeholder='Type your password' 
             value={password}
             onChange={(e)=>setPassword(e.target.value)}
             ></input>
             <button  type="submit">SignUp</button>
        </form>
      
    </div>
  );
};

export default Signup;
