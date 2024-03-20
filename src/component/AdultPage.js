import React,{useState, useEffect} from 'react'
import DifficultyCard from './DifficultyCard';
import AdultChildShimmer from './AdultChildShimmer';

const AdultPage = () => {
    const wordsData = [
        { difficulty: "Basic", words: ["Hello", "Thank you", "Help"] },
        { difficulty: "Intermediate", words: ["Work", "Travel", "Money"] },
        { difficulty: "Advanced", words: ["Health", "Education", "Technology"] }
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
            <div className='p-2 mt-20   text-4xl text-center font-semibold'>Adults Learning</div>
    
            <div className='font-semibold p-3 '>
                {wordsData.map((curr,index)=>(<DifficultyCard key={index} props={curr}/>))}
            </div>
        </div>
      )
}

export default AdultPage