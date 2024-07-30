"use client";
import useGlobalState from "@/store";
import { Button } from "@mui/material";
import SadFaceSvg from "@public/SadFace.svg";

export default function ResultFailure({ handleReset }) {
  const setStep = useGlobalState((state) => state.setStep);
  return (
    <>
      <div className="text-red-700 flex justify-center items-center min-h-[calc(100dvh-80px)] flex-col font-bold bg-white ">
        <div className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] lg:w-[170px] lg:h-[170px]">
          <img src={SadFaceSvg} alt="Sad face" />
        </div>
        <div className="text-center text-[34px] sm:text-[40px] md:text-[60px] lg:text-[70px]">
          Good luck next time !
        </div>
        <div className="text-xl">Your score is 0</div>
        <div className="p-3">
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              setStep(2);
              handleReset();
            }}
          >
            Reset
          </Button>
        </div>
      </div>
    </>
  );
}
