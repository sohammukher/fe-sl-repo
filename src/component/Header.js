///Header : Contains the navbar
// Header:
// -Logo
// -Nav Items

// -------------------------
// import { useState,useEffect } from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


const Header = () => {
  // let loginBtnTxt = "Login";

//  let [modeText, setModeText] = useState("Dark");

//   const [loginBtn, setloginBtn] = useState(loginBtnTxt);


//   const [welcomeText,setWelcomeText] = useState("Welcome Visitor");

let [modeText, setModeText] = useState("Dark");// Dark Mode

function toggleTheme(){
  // document.documentElement.classList.add('dark');
  document.documentElement.classList.contains('dark')?document.documentElement.classList.remove('dark'):document.documentElement.classList.add('dark');
  modeText === "Dark"? setModeText("Light"):setModeText("Dark");


}

function isDarkModeActive(){
  return document.documentElement.classList.contains('dark');
}


  const navigate = useNavigate();

  // To sign out the user
  const handleLogout = () => {

    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/login");
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  return (

    <div className=" bg-amber-400 flex bg-gradient-to-t from-orange-400  justify-between   h-20 ">
     <div className=" font-extrabold px-5 p-4 text-3xl cursor-pointer">
      SignLingual
     </div>

     <div className="px-5 py-6  font-bold text-xl">
     <Link to="/">
     <span className="px-2 cursor-pointer">HOME</span>
     </Link>

     
     <span className="px-2 cursor-pointer">ABOUT</span>

     <Link to='/contact'>
     <span className="px-2 cursor-pointer">CONTACT</span>
     </Link>


     <Link to='/faq'>
     <span className="px-2 cursor-pointer">FAQ</span>
     </Link>
     </div>


{/* <div className="bg-blue-800 p-2 rounded-lg  text-white font-semibold"> Logout */}
{/* </div> */}

<button onClick={toggleTheme} className=" font-bold p-3 m-3 ml-[65%] bg-black text-white rounded-xl hover:bg-blue-400 dark:hover:bg-blue-400 dark:bg-blue-50 dark:text-black toggle-dark">{modeText} Mode </button>

<button onClick={handleLogout} className="bg-red-800 text-xl text-white rounded-xl p-3 m-3 hover:bg-red-600">Logout</button>

    </div>
  );



};

export default Header;