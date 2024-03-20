import React from 'react'

const validate = (email, password, name) => {

    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    // Minimum eight characters, at least one letter, one number and one special character
    const isPasswordValid =/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);

    const isNameValid = /^[a-z ,.'-]+$/i.test(name);


    if(!isEmailValid && !isPasswordValid ) return "Email and Password are not valid!";

    if(!isEmailValid) return "Email is not valid!";

    if(!isPasswordValid) return "Password should contain atleast eight characters containing a number and special character!";

    if(!isNameValid) return "Name is required!";

  // null means there in no error from above  
  return null;
}

export default validate
