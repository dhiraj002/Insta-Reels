import React from 'react';
import { auth } from '../firebase';

function Login() {
    const [email,setEmail]=React.useState("")
    const [password,setPassword]=React.useState("");
   async function loginHandler(){
    //    alert(email + " " + password);

        try{
            let userCred= await auth.signInWithEmailAndPassword(email,password)
            console.log(userCred.user);
            alert("User logged In")

        }catch(err){
                alert(err.message);
        }

         setEmail("");
         setPassword("");
    }



  return (
    <>
    <h1>Login</h1>
    <input type="text" placeholder='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
    <br />
    <input type="password" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>

    <button onClick={loginHandler}>LOGIN</button>
    </>
  )
}

export default Login