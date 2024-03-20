// ///Header : Contains the navbar
// // Header:
// // -Logo
// // -Nav Items

// // -------------------------
// // import { useState,useEffect } from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { domain } from "../utils/endpoints";
import useOnlineStatus from "../utils/useOnlineStatus"


// const Header = () => {
//   // let loginBtnTxt = "Login";

// //  let [modeText, setModeText] = useState("Dark");

// //   const [loginBtn, setloginBtn] = useState(loginBtnTxt);


// //   const [welcomeText,setWelcomeText] = useState("Welcome Visitor");

// let [modeText, setModeText] = useState("Dark");// Dark Mode

// function toggleTheme(){
//   // document.documentElement.classList.add('dark');
//   document.documentElement.classList.contains('dark')?document.documentElement.classList.remove('dark'):document.documentElement.classList.add('dark');
//   modeText === "Dark"? setModeText("Light"):setModeText("Dark");


// }

// function isDarkModeActive(){
//   return document.documentElement.classList.contains('dark');
// }

// // Internet Status:
//   // Checking Internet Status :
//   const internetStatus = useOnlineStatus()


//   const navigate = useNavigate();

//   // To sign out the user
//   const handleLogout = () => {

//     signOut(auth).then(() => {
//       // Sign-out successful.
//       navigate("/login");
//     }).catch((error) => {
//       // An error happened.
//       navigate("/error")
//     });
//   }

//   // // Internet Status
//   // console.log("internetStatus "+internetStatus)
//   // if(internetStatus === false){
//   //   return <h1>You are Offline!!!!</h1>
//   // }


//   return (

//     <div className=" bg-amber-400 flex bg-gradient-to-t from-orange-400  justify-between   h-20 w-[100%]">
//     <Link to="/">
//      <div className=" font-extrabold px-5 p-4 text-3xl cursor-pointer">
//       SignLingual
//      </div>
//      </Link>

//      <div className="px-5 py-6  font-bold text-xl">
//      <Link to="/">
//      <span className="px-2 cursor-pointer">HOME</span>
//      </Link>

     
//      <span className="px-2 cursor-pointer">ABOUT</span>

//      <Link to='/contact'>
//      <span className="px-2 cursor-pointer">CONTACT</span>
//      </Link>


//      <Link to='/faq'>
//      <span className="px-2 cursor-pointer">FAQ</span>
//      </Link>

//      <span className="">Online Status: {internetStatus?"🟢":"🔴"}</span>

//      </div>


// {/* <div className="bg-blue-800 p-2 rounded-lg  text-white font-semibold"> Logout */}
// {/* </div> */}


// <button onClick={toggleTheme} className=" font-bold p-3 m-3 ml-[40%] bg-black text-white rounded-xl hover:bg-blue-400 dark:hover:bg-blue-400 dark:bg-blue-50 dark:text-black toggle-dark">{modeText} Mode </button>

// <button onClick={handleLogout} className="bg-red-800 text-xl text-white rounded-xl p-3 m-3 hover:bg-red-600">Logout</button>

//     </div>
//   );



// };

// export default Header;

import * as React from "react"
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material"
import { FiMenu } from "react-icons/fi"
import { HiArrowSmRight } from "react-icons/hi"
// mock data
const links = [["Home", '/'],["About", '/about'], ["Docs", '/faq'], ["Contact Us", '/contact']]
const Logo = () => (
  <Box
    sx={{
      fontSize: "24px",
      fontWeight: 800,
      textDecoration: "none",
      color: "black",
    }}
  >
    ❍ SignLingual
  </Box>
)
// simple nav
export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  // let [modeText, setModeText] = useState("Dark");// Dark Mode

  // function toggleTheme(){
  //   // document.documentElement.classList.add('dark');
  //   document.documentElement.classList.contains('dark')?document.documentElement.classList.remove('dark'):document.documentElement.classList.add('dark');
  //   modeText === "Dark"? setModeText("Light"):setModeText("Dark");
  // }

  // function isDarkModeActive(){
  //   return document.documentElement.classList.contains('dark');
  // }
  
  // Internet Status:
    // Checking Internet Status :
    const internetStatus = useOnlineStatus()
  
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
    <AppBar
      position="static"
      sx={{
        bgcolor: "background.paper",
        py: 1,
      }}
    >
      <Container>
        <Toolbar
          variant="dense"
          disableGutters
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Logo />
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {links.map(link => (

              <Link to={link[1]}>
                <Button
                  component="a"
                  href="#"
                  key={link[0]}
                  onClick={handleCloseNavMenu}
                  sx={{ fontWeight: 500 }}
                >
                  {link[0]}
                </Button>
              </Link>
            ))}
            <Link to="/login">
            <Button
              component="a"
              href="#"
              variant="contained"
              color="primary"
              sx={{
                borderRadius: 999,
              }}
              endIcon={<HiArrowSmRight size={16} />}
            >
              Login
            </Button>
            </Link>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="medium"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <FiMenu />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
              disablePortal={true}
            >
              {links.map(link => (
                <Link to={link[1]}>
                  <MenuItem key={link} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{link[0]}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}