import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { Redirect, Route, Switch } from "react-router";

import Login from "./Login"

import './App.css'

export default function Signup() {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const auth = getAuth();
    
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };


    return (
        <div className="container">
            <h1>Sign Up</h1>

            <hr/>

            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required
                          onChange={(event) => {
                            setRegisterEmail(event.target.value);
                          }}
            />

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required
                      onChange={(event) => {
                        setRegisterPassword(event.target.value);
                      }}
            />

            <div className="clearfix">
            <button type="button" onClick={register}>Sign Up</button>
             <button type="button">Login</button> 


            </div>
        </div>
    )
}


