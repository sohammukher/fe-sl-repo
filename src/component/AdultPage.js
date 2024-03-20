import React, { useState, useEffect } from "react";
import DifficultyCard from "./DifficultyCard";
import AdultChildShimmer from "./AdultChildShimmer";
import Word from "./Word";
import Sentence from "./Sentence";

const AdultPage = () => {
  const wordsData = [
    { difficulty: "Basic", words: ["Hello", "Thank you", "Help"] },
    { difficulty: "Intermediate", words: ["Work", "Travel", "Money"] },
    { difficulty: "Advanced", words: ["Health", "Education", "Technology"] },
  ];

  console.log(wordsData);

  // Sentences
  const signLanguageSentences = [
    "Hello, how are you?",
    "Thank you.",
    "I love you.",
    "What is your name?",
    "I am sorry.",
    "Goodbye, see you later."
  ];

  console.log(signLanguageSentences);

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

  if (showShimmer) {
    return <AdultChildShimmer />;
  }

  return (
    <div>
      <div className="p-2 mt-20   text-4xl text-center font-semibold">
        Adults Learning
      </div>

      <div className="font-semibold p-3 ">
        {wordsData.map((curr, index) => (
          <DifficultyCard key={index} props={curr} />
        ))}
      </div>

      <div>

{/* Block For The Sentences Start*/}
        <div className="p-6 justify-center bg-orange-300 bg-opacity-50 rounded-lg m-3 w-76 text-center">
          <div className=" text-3xl p-4  font-semibold">Learn Sentences</div>

          <div className="flex flex-col    justify-center items-center">

            {signLanguageSentences.map((curr, index) => (
              <Sentence word={curr} />
            ))}

          </div>

        </div>
      </div>

{/* Block For Sentences End */}
    </div>
  );
};

export default AdultPage;
