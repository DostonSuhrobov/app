import { useState } from "react"
import { 
  getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut,
  createUserWithEmailAndPassword
} from 'firebase/auth'

import './App.css'



export default function Login() {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");


        const auth = getAuth();

        const login = async () => {
          try {
            const user = await signInWithEmailAndPassword(
              auth,
              loginEmail,
              loginPassword
            );
            console.log(user);
          } catch (error) {
            console.log(error.message);
          }
        };

        const logout = async () => {
          await signOut(auth);
        };


    return (
        <div className="container">
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required
                  onChange={(event) => {
                    setLoginEmail(event.target.value);
                  }}
        />
    
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required
                  onChange={(event) => {
                    setLoginPassword(event.target.value);
                  }}
        />
    
        <button  onClick={login}>Login</button>
        <button onClick={logout} style={{backgroundColor:'#adadad', color:'black'}}>logout</button>


        </div>
    )
}
