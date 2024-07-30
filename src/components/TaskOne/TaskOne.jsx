import useGlobalState from "@/store";
import GameScreen from "@/components/TaskOne/GameScreen";
import ResultScreen from "@/components/TaskOne/ResultScreen";
import StartScreen from "@/components/TaskOne/StartScreen";

export default function TaskOne() {
  const step = useGlobalState((state) => state.step);
  return (
    <div>
      {step === 1 && <StartScreen />}
      {step === 2 && <GameScreen />}
      {step === 3 && <ResultScreen />}
    </div>
  );
}
