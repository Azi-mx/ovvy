import { useState } from "react";
import StartScreen from "./TaskOne/StartScreen";
import GameScreen from "./TaskOne/GameScreen";
import ResultScreen from "./TaskOne/ResultScreen";

export default function TaskOne() {
  const [step, setStep] = useState(1);
  return (
    <div className="flex justify-center items-center flex-col min-h-screen gap-4">
      {step === 1 && <StartScreen setStep={setStep} />}
      {step === 2 && <GameScreen setStep={setStep} />}
      {step === 3 && <ResultScreen setStep={setStep} />}
    </div>
  );
}
