import useGlobalState from "@/store";
import ResultFailure from "@/components/TaskOne/ResultFailure";
import ResultSuccess from "@/components/TaskOne/ResultSuccess";
export default function ResultScreen({ handleReset }) {
  const userName = useGlobalState((state) => state.userName); // import the userName from the zustand store
  const score = useGlobalState((state) => state.score); // import the score from the zustand store

  return (
    <div className="flex justify-center items-center flex-col gap-6">
      <div className="text-center">
        {userName && score > 0 && <ResultSuccess />}
        {score == 0 && <ResultFailure handleReset={handleReset} />}
      </div>
    </div>
  );
}
