import { useState } from 'react'
import { 
  getAuth, onAuthStateChanged,
} from 'firebase/auth'
import { initializeApp } from 'firebase/app'


import Signup from './Signup';
import Login from './Login'



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqg7LLfd49TuQE_Kn8AifWXhzJNkTB7KA",
  authDomain: "react-firechat-f3539.firebaseapp.com",
  projectId: "react-firechat-f3539",
  storageBucket: "react-firechat-f3539.appspot.com",
  messagingSenderId: "571094429249",
  appId: "1:571094429249:web:ae5ed730a0a2d8743260c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();





function App() {

      // know if the user is logged
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    console.log(user);

  return (
    <div>
 
       {user ? <Login /> : <Signup />  }
       
  
    </div>
  );
}

export default App;
