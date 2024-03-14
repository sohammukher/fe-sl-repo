///Header : Contains the navbar
// Header:
// -Logo
// -Nav Items

// -------------------------
import { useState,useEffect } from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";


const Header = () => {
  let loginBtnTxt = "Login";

 let [modeText, setModeText] = useState("Dark");

  const [loginBtn, setloginBtn] = useState(loginBtnTxt);


  const [welcomeText,setWelcomeText] = useState("Welcome Visitor");


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

    <div className=" bg-amber-400 flex  justify-between   h-12">
     <div className="  font-extrabold px-4">
      Sign Language Converter
     </div>

     <div className="px-4   font-semibold">
     <span className="px-2">ABOUT</span>
     <span className="px-2">CONTACT US</span>
     <span className="px-2">HOME</span>
     </div>


{/* <div className="bg-blue-800 p-2 rounded-lg  text-white font-semibold"> Logout */}
{/* </div> */}

<button onClick={handleLogout} className="bg-red-800">Logout</button>

    </div>
  );



};

export default Header;