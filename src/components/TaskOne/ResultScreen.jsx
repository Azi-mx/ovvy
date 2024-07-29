import { Button } from "@mui/material";
export default function ResultScreen({ setStep, score, handleReset }) {
  console.log("score", score);
  return (
    <div>
      ResultScreen
      {score && (
        <div>
          <p>score: {score}</p>
        </div>
      )}
      <Button
        variant="contained"
        color="error"
        onClick={() => {
          setStep(2);
          handleReset;
        }}
      >
        Reset
      </Button>
    </div>
  );
}
