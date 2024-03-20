import React from 'react'
import { translateURL } from '../utils/endpoints'

const Sentence = ({word}) => {
  return (
    <a href={translateURL+word} rel="noopener noreferrer">        

    <div className='p-6 m-2 bg-amber-400 rounded-2xl p-4 ml-9 w-80 border-2 border-black font-bold text-lg cursor-pointer hover:bg-amber-300'>
    {word}
    </div>
    </a>
  )
}

export default Sentence