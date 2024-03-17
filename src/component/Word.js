import React from 'react'

const Word = ({word}) => {
  return (
    <div className='p-6 m-2 bg-amber-400 rounded-2xl p-4 ml-9 w-40 border-2 border-black font-bold text-lg cursor-pointer hover:bg-amber-300'>
    {word}
    </div>
  )
}

export default Word