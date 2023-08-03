import { useState } from "react"
import SignupForm from "../components/SignupComponents/SignupForm";
import LoginForm from "../components/SignupComponents/LoginForm";

const AuthenticationPage = () => {
 const [flag,setFlag] = useState(false);
  return (
    <div className='wrapper'>
      {!flag ? <h2>Signup</h2>: <h2>Login</h2>}
      {!flag ? <SignupForm />:<LoginForm/>}
      {
        !flag ?
          <p style={{cursor:'pointer'}} onClick={()=>{setFlag(!flag)}}>Already have account ? Click here to Login</p>
        :
          <p style={{cursor:'pointer'}} onClick={()=>{setFlag(!flag)}}>Don't have an account ? Click here to Signup</p>
      }
    </div>
  )
}

export default AuthenticationPage