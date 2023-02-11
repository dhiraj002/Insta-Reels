import React from 'react'
import {auth,database, storage} from "../firebase"

function SignUp() {

  const [email,setEmail]=React.useState("")
  const [password,setPassword]=React.useState("");
  const [name,setName]=React.useState("");
  const [filePath,setFilePath]=React.useState("");

  async function signUpHandler(){
    if(email==""||password==""||name==""||filePath==""){
      alert("All fields are required");
      return;
    }
     
    try{
        const userCred=await auth.createUserWithEmailAndPassword(email,password)
         const userid=userCred.user.uid;
         alert("User signed  up")
         
         //uploding user image
         const uploadTask=storage.ref(`/users/${userid}/profileImage`).put(filePath);
         uploadTask.on("state_changed",progressCb,errorCb,successCb);

         function progressCb(snapShot){
          var progress=(snapShot.bytesTransferred/snapShot.totalBytes)*100;
          console.log("Progress:",progress,"%");

         }

         function errorCb(err){
          console.log(err.message);
          console.log(err.payload);
         }

        async function successCb(){
          let imgUrl=await uploadTask.snapshot.ref.getDownloadURL()
          let docSnap=await database.users.doc(userid).set({
            name:name,
            email:email,
            createdAt:database.getCurrentTimeStamp(),
            profileImageLink:imgUrl
          })
          
        }
      
      }catch(err){
      alert(err.message)
    }
  }

  return (
    <>
    <h1>SignUp</h1>
    <input type="email" placeholder='Enter Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    <br />
    <input type="password" placeholder='Enter Password 'value={password} onChange={(e)=>{setPassword(e.target.value)}} />
    <br />
    <input type="text" placeholder='Enter Name' value={name} onChange={(e)=>{setName(e.target.value)}} />
    <br />
    <input type="file" onChange={(e)=>{setFilePath(e.target.files[0])}}/>
    <button onClick={signUpHandler}>SignUp</button>
    </>
  )
}

export default SignUp