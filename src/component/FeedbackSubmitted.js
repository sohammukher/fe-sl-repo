import React from 'react'
import img2 from '../ASL-cover-image.jpg'

const FeedbackSubmitted = () => {
  return (
    <div>

    <div className="absolute">
    {/* <img src='https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg' */}
    <img src = {img2}
         alt='Background' />
</div>

    <div className='w-1/2 absolute p-32 bg-orange-300 bg-opacity-60 my-36 mx-auto right-0 left-0 text-black rounded-lg'>

        <div>
        <p className='font-semibold text-4xl'> Thank you for submitting your feedback! </p>
        <p className='font-semibold text-4xl pt-5 pl-32'> We'll get back to you soon! </p>
        </div>

    </div>

    </div>
  )
}

export default FeedbackSubmitted
