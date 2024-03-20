import React,{useState, useEffect} from 'react'
import DifficultyCard from './DifficultyCard'
import AdultChildShimmer from './AdultChildShimmer';

export const KidsPage = () => {


    // Difficulty Cards
    const wordsData = [
        { difficulty: "Basic", words: ["Mom", "Eat", "Play"] },
        { difficulty: "Intermediate", words: ["Colors", "Animals", "Toilet"] },
        { difficulty: "Advanced", words: ["Please", "Friend", "Bed"] }
      ];
      
      console.log(wordsData);

        // Shimmer Logic Here
        const [showShimmer, setShowShimmer] = useState(true);

        useEffect(() => {
          // Simulate delay with setTimeout
          const delayTimeout = setTimeout(() => {
            setShowShimmer(false); // Hide shimmer effect after delay
          }, 1000); // Set delay time in milliseconds
      
          // Clear timeout to avoid memory leaks
          return () => clearTimeout(delayTimeout);
        }, []); // Run only once after initial render
      
        if(showShimmer){
          return(<AdultChildShimmer/>)
        }

  return (
    <div>

        <div className='p-2 mt-20   text-4xl text-center font-semibold'>Kids Learning</div>

        <div className='font-semibold p-3'>
            {wordsData.map((curr,index)=>(<DifficultyCard key={index} props={curr}/>))}
        </div>
    </div>
  )
}
