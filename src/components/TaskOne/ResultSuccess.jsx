import confetti from "canvas-confetti";
import { useEffect } from "react";
import SmileFaceSvg from "@public/HappyFace.svg";
import { Button } from "@mui/material";
import useGlobalState from "@/store";

export default function ResultSuccess() {
  const score = useGlobalState((state) => state.score);
  const setStep = useGlobalState((state) => state.setStep);
  const userName = useGlobalState((state) => state.userName);

  let duration = 15 * 1000;
  let animationEnd = Date.now() + duration;
  let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
  const handleConfetti = () => {
    let interval = setInterval(function () {
      let timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      let particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      );
    }, 250);
  };

  useEffect(() => {
    handleConfetti();
  }, []);
  return (
    <>
      <div className="text-yellow-600 flex justify-center items-center min-h-[calc(100dvh-80px)] flex-col font-bold bg-white ">
        <div className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] lg:w-[170px] lg:h-[170px]">
          <img src={SmileFaceSvg} alt="Smile Face" />
        </div>
        <div className="text-center text-[34px] sm:text-[40px] md:text-[60px] lg:text-[70px]">
          Great {userName} Your Score is {score}
        </div>
        {/* <div className="text-xl"></div> */}
        <div className="p-3">
          <Button variant="contained" onClick={() => setStep(2)}>
            Play Again
          </Button>
        </div>
      </div>
    </>
  );
}
