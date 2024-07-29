import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { getDogImages } from "./GameScreenController";
import ResultScreen from "./ResultScreen";

export default function GameScreen({ setStep }) {
  const [dogImages, setDogImages] = useState();
  const [dogBreed, setDogBreed] = useState();
  const [options, setOptions] = useState([]);
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);
  useEffect(() => {
    getDogImages(setDogImages, setDogBreed, setOptions);
  }, []);

  const handleOptionClick = (option) => {
    if (option === dogBreed) {
      getDogImages(setDogImages, setDogBreed, setOptions);
      setScore(score + 10);
      setMessage("Correct!");
    } else {
      <ResultScreen score={score} reset={handleReset} />;
      // document.getElementById("2").style.background("red");
      setStep(3);
    }
  };
  const handleReset = () => {
    getDogImages(setDogImages, setDogBreed, setOptions);
    setScore(0);
    setMessage("");
  };
  return (
    <div className="min-h-screen w-full">
      <div className="flex min-h-screen w-full">
        <div className="bg-violet-100 min-h-screen w-full">
          game
          <div className="quiz-container w-5/6">
            <h1>Dog Breed Quiz</h1>
            <div className="image-container">
              <img id="quiz-image" src={dogImages} alt="Dog Image" />
            </div>
            <div id="options-container" className="options-container">
              {options &&
                options.length > 0 &&
                options.map((option, index) => (
                  <button
                    key={index}
                    id={index}
                    className="option-button"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </button>
                ))}
            </div>
            {message && <p>{message}</p>}
          </div>
        </div>
        <div className="bg-blue-200 min-h-screen w-2/6 grid place-content-center">
          Score : {score ? score : 0}
          <Button variant="contained" color="error" onClick={handleReset}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
