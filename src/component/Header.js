///Header : Contains the navbar
// Header:
// -Logo
// -Nav Items

// -------------------------
import { useState,useEffect } from "react";
// import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

// import useOnlineStatus from "../utils/useOnlineStatus"

// For Using the React Context

// Import the Context File
// import UserContext from "../utils/UserContext";

// Import useContext from "react"
import { useContext } from "react";


// import { Provider } from "react-redux";
// import {appStore} from "../utils/appStore"
// import { changeLanguage } from "../utils/configSlice";

// import {useDispatch, useSelector} from "react-redux"

// import { Provider, useSelector } from "react-redux";
// import appStore from "../utils/appStore";
// import GPTSearchUI from './GPTSearchUI';
// import gptSlice from "../utils/gptSlice";


const Header = () => {
  let loginBtnTxt = "Login";
  // let loginBtnTxt = "Logout";


  // let modeText = "Dark";

 let [modeText, setModeText] = useState("Dark");

  const [loginBtn, setloginBtn] = useState(loginBtnTxt);


  const [welcomeText,setWelcomeText] = useState("Welcome Visitor");

 

  return (

    <div className=" bg-amber-400 flex  justify-between   h-12">
     <div className="  font-extrabold px-4">
      Sign Language Converter
     </div>

     <div className="px-4   font-semibold">
     <span className="px-2">ABOUT</span>
     <span className="px-2">CONTACT US</span>
     <span className="px-2">HOME</span>
     </div>


<div className="bg-blue-800 p-2 rounded-lg  text-white font-semibold"> Login
</div>

    </div>
  );



};

export default Header;