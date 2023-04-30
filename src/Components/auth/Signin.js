import React, {useState} from 'react';
import {auth} from '../../firebaseConfig';
import "./auth.css";

import { signInWithEmailAndPassword } from 'firebase/auth';

const Signin = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const signIn=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            console.log(userCredential)
        }).catch((error)=>{
            console.log(error)
        })
    }
    
  return (
    <div className='sign-in-container' >
        <form className="signinform" onSubmit={signIn}>
            <h1 className='h1login'>Login to your Account</h1>
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
             <button className='loginbtn' type="submit">Login</button>
        </form>
      
    </div>
  );
};

export default Signin;
