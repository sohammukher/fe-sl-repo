import React from 'react'
import DifficultyCard from './DifficultyCard';

const AdultPage = () => {
    const wordsData = [
        { difficulty: "Basic", words: ["Hello", "Thank you", "Help"] },
        { difficulty: "Intermediate", words: ["Work", "Travel", "Money"] },
        { difficulty: "Advance", words: ["Health", "Education", "Technology"] }
      ];
      
      console.log(wordsData);

      
      return (
        <div>
            <div className='p-2 mt-20   text-4xl text-center'>Adults Learning</div>
    
            <div>
                {wordsData.map((curr,index)=>(<DifficultyCard key={index} props={curr}/>))}
            </div>
        </div>
      )
}

export default AdultPage