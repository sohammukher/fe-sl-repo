import React from 'react';
import LoginHeader from './LoginHeader';
import { useState, useRef } from 'react';
import validate from '../utils/validate';

const Login = () => {

  // for sign in/ sign up form change logic
  const [isSignInForm, setIsSignInForm] = useState(true);


  // for error message after data validations
  const [errorMessage, setErrorMessage] = useState(null);


  // Taking reference of these values from the input fields of name, email and password
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  
  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);

}



 const handleButtonClick = () => {

  // console.log(email.current.value);

  const emailValue = email.current ? email.current.value : null;
  const passwordValue = password.current ? password.current.value : null;
  const nameValue = name.current ? name.current.value : null;

  const message = validate(emailValue, passwordValue, nameValue);
 
  // console.log(message);

  setErrorMessage(message);
}



  return(
    <div>
      <LoginHeader />


      <form onSubmit={(e) => e.preventDefault()}
      className="w-3/12 absolute p-16 bg-black bg-opacity-60 my-36 mx-auto right-0 left-0 text-white rounded-lg">

        {/* Sign In form */}
        <h1 className="font-bold text-3xl my-2 p-3">{isSignInForm ? "Sign In": "Sign Up" }</h1>

       { !isSignInForm && 
        <input
        ref = {name}
        type="text" placeholder="Name" className="p-4 my-4 w-full bg-slate-700 rounded-lg" />
       }

        <input 
        ref = {email}
        type="text" placeholder="Email-address" className="p-4 my-4 w-full bg-slate-700 rounded-lg" />
        
        <input
        ref = {password}
         type="password" placeholder="Password" className="p-4 my-4 w-full bg-slate-700 rounded-lg" />

        
        {/* To display error messages after data validations in form */}
        <p className="text-red-500 font-semibold py-3 ">{errorMessage}</p>


        <button className="p-4 my-6 bg-amber-500 rounded-lg font-semibold w-full hover:bg-amber-400"
         onClick={handleButtonClick}
           >
             {isSignInForm ? "Sign In": "Sign Up" } </button>



        {/* SIGN UP FORM  */}

        <p className="font-semibold cursor-pointer" onClick={toggleSignIn}>{isSignInForm ? "New to Sign Lingual? Sign Up Now!": "Already registered? Sign In now!" }</p>
      </form>
    </div>
  )
  
};

export default Login;
