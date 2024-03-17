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

    <div className=" bg-amber-400 flex bg-gradient-to-t from-orange-400  justify-between   h-20">
     <div className=" font-extrabold px-5 p-4 text-3xl">
      SignLingual
     </div>

     <div className="px-5 py-6  font-bold text-xl">
     <span className="px-2 cursor-pointer">HOME</span>
     <span className="px-2 cursor-pointer">ABOUT</span>
     <span className="px-2 cursor-pointer">CONTACT</span>
     <span className="px-2 cursor-pointer">FAQ</span>
     
     </div>


{/* <div className="bg-blue-800 p-2 rounded-lg  text-white font-semibold"> Logout */}
{/* </div> */}

<button onClick={handleLogout} className="bg-red-800 text-xl text-white rounded-xl p-3 m-3 hover:bg-red-600">Logout</button>

    </div>
  );



};

export default Header;