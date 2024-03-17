import React from 'react'
import Word from './Word';

const DifficultyCard = (props) => {

    const difficultyLvl = props.props.difficulty;
    const words =  props.props.words;


  return (
    <div className='p-6 justify-center bg-orange-300 bg-opacity-50 rounded-lg m-3 w-76 text-center'>
        <div className=' text-3xl p-4'>{difficultyLvl}</div>
        <div className='flex    justify-center items-center'>
            {words.map((curr,index)=><Word word={curr}/>)}
        </div>
    </div>
  )
}

export default DifficultyCard