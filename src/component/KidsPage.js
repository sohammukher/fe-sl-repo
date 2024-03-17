import React from 'react'
import DifficultyCard from './DifficultyCard'

export const KidsPage = () => {


    // Difficulty Cards
    const wordsData = [
        { difficulty: "Basic", words: ["Mom", "Eat", "Play"] },
        { difficulty: "Intermediate", words: ["Colors", "Animals", "Toilet"] },
        { difficulty: "Advanced", words: ["Please", "Friend", "Bed"] }
      ];
      
      console.log(wordsData);

  return (
    <div>

        <div className='p-2 mt-20   text-4xl text-center font-semibold'>Kids Learning</div>

        <div className='font-semibold p-3'>
            {wordsData.map((curr,index)=>(<DifficultyCard key={index} props={curr}/>))}
        </div>
    </div>
  )
}
