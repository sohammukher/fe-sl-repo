import React from 'react';
import LoginHeader from './LoginHeader';
import { useState, useRef } from 'react';
import validate from '../utils/validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import img2 from '../ASL-cover-image.jpg'
import img3 from '../three-hands-sign-the-word-new.jpg'
import Header from './Header';

const Login = () => {

  // for sign in/ sign up form change logic
  const [isSignInForm, setIsSignInForm] = useState(true);


  // for error message after data validations
  const [errorMessage, setErrorMessage] = useState(null);


  const navigate = useNavigate();


  // Taking reference of these values from the input fields of name, email and password
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  
  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);

}



 const handleButtonClick = () => {

  const emailValue = email.current ? email.current.value : null;
  const passwordValue = password.current ? password.current.value : null;
  const nameValue = name.current ? name.current.value : null;

  // console.log(emailValue);
  // console.log(passwordValue);

  const message = validate(emailValue, passwordValue, nameValue);
 
  // console.log(message);

  setErrorMessage(message);

  // If message is present, that means error happened, so we return directly from here
  // otherwise, we proceed to sign in/ sign up

  if(message) return;

  // sign in/up successfull so we can create a user

  if(!isSignInForm)
  {
    // Sign Up Form Logic
    createUserWithEmailAndPassword(
      auth,
      emailValue,
      passwordValue,
      nameValue
      )

  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("email", user.email);

    navigate("/choice");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });
  }
  else
  {
    // Sign In Form Logic
    signInWithEmailAndPassword(
      auth,
      emailValue,
      passwordValue
    )
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);

    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("email", user.email);
    navigate("/choice");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });
  }
}

  return(
    <div>
      <Header />


      <div className="absolute">
                {/* <img src='https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg' */}
                <img src = {img2}
                     alt='Background' />
      </div>


      <form onSubmit={(e) => e.preventDefault()}
      className="w-3/12 absolute p-16 bg-orange-300 bg-opacity-60 my-36 mx-auto right-0 left-0 text-black rounded-lg">

        {/* Sign In form */}
        <h1 className="font-bold text-4xl my-2 p-3">{isSignInForm ? "Sign In": "Sign Up" }</h1>

       { !isSignInForm && 
        <input
        ref = {name}
        type="text" placeholder="Name" className="p-4 my-4 w-full bg-white rounded-lg  bg-opacity-80 text-black font-semibold" />
       }

        <input 
        ref = {email}
        type="text" placeholder="Email-address" className="p-4 my-4 w-full bg-white rounded-lg bg-opacity-80 text-black font-semibold" />
        
        <input
        ref = {password}
         type="password" placeholder="Password" className="p-4 my-4 w-full bg-white rounded-lg bg-opacity-80 text-black font-semibold" />

        
        {/* To display error messages after data validations in form */}
        <p className="text-red-500 font-semibold py-3 ">{errorMessage}</p>


        <button className="p-4 my-6 bg-amber-500 rounded-lg font-semibold w-full hover:bg-amber-400 text-lg"
         onClick={handleButtonClick}
           >
             {isSignInForm ? "Sign In": "Sign Up" } </button>



        {/* SIGN UP FORM  */}

        <p className="font-semibold cursor-pointer text-lg" onClick={toggleSignIn}>{isSignInForm ? "New to Sign Lingual? Sign Up Now!": "Already registered? Sign In now!" }</p>
      </form>
    </div>
  )
  
};

export default Login;
