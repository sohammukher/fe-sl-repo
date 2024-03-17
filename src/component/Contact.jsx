import React from 'react'
import img2 from '../ASL-cover-image.jpg'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {

    navigate("/feedback")
  }


  return (
    
    <div>
    <div className="absolute">
    {/* <img src='https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg' */}
    <img src = {img2}
         alt='Background' />
</div>

<form onSubmit={(e) => e.preventDefault()}
className="w-3/12 absolute p-16 bg-orange-300 bg-opacity-60 my-36 mx-auto right-0 left-0 text-black rounded-lg">

<h1 className="font-bold text-4xl my-2 p-3">Contact Us</h1>

<p className='font-semibold'>Have any queries or feedback? Let us know!</p>


<input
type="text" placeholder="Name" className="p-4 my-4 w-full bg-white rounded-lg  bg-opacity-80 text-black font-semibold" />


<input 
type="text" placeholder="Email-address" className="p-4 my-4 w-full bg-white rounded-lg bg-opacity-80 text-black font-semibold" />

<input
type="text" placeholder="Enter your feedback" className="pt-5 pb-14  pl-3 my-2 w-full bg-white rounded-lg bg-opacity-80 text-black font-semibold  mr-[40%]" />


<button className="p-4 my-6 bg-amber-500 rounded-lg font-semibold w-full hover:bg-amber-400 text-lg"
onClick={handleButtonClick}
>
Submit</button>

</form>
</div>
  )
}

export default Contact