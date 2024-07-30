import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button, Card } from "@mui/material";
import useGlobalState from "@/store";
import { getDogImages } from "./GameScreenController";
import ResultScreen from "@/components/TaskOne//ResultScreen";
import { TextH2 } from "@/components/shared/TextH2";

export default function GameScreen() {
  const setStep = useGlobalState((state) => state.setStep); // import the setStep from the zustand store
  const score = useGlobalState((state) => state.score); // import the score from the zustand store
  const setScore = useGlobalState((state) => state.setScore); // import the setScore from the zustand store

  const [dogImages, setDogImages] = useState();
  const [dogBreed, setDogBreed] = useState();
  const [options, setOptions] = useState([]);
  const [message, setMessage] = useState("");
  useEffect(() => {
    getDogImages(setDogImages, setDogBreed, setOptions);
  }, []);

  const handleOptionClick = (option) => {
    if (option === dogBreed) {
      getDogImages(setDogImages, setDogBreed, setOptions);
      setScore(score + 10);
      toast.success("Correct!");
    } else {
      <ResultScreen score={score} handleReset={handleReset} />;
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
    <div className="flex justify-center items-center w-screen">
      <div className="flex justify-center items-center bg-violet-100 min-h-[calc(100dvh-20px)]  w-5/6">
        <Card className="p-4 w-[500px]">
          <TextH2 className="text-center">Dog Breed Quiz</TextH2>
          <div className="image-container">
            <img id="quiz-image" src={dogImages} alt="Dog Image" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {options &&
              options.length > 0 &&
              options.map((option, index) => (
                <Button
                  key={index}
                  id={index}
                  variant="outlined"
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </Button>
              ))}
          </div>
        </Card>

        {message && <p>{message}</p>}
      </div>
      <div className="bg-blue-200 h-full  min-h-[calc(100dvh-20px)] w-2/6 grid place-content-center">
        <div>Score : {score ? score : 0}</div>
        <Button variant="contained" color="error" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </div>
  );
}
