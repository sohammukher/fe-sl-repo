import React from 'react'

const Word = ({word}) => {
  return (
    <div className='p-2 m-2 bg-amber-400 rounded-2xl p-4 ml-9 w-40 border-2 border-black font-bold'>
    {word}
    </div>
  )
}

export default Word