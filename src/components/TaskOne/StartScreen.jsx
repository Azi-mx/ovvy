/* eslint-disable react/prop-types */
import { useRef } from "react";
import { Button, TextField } from "@mui/material";

export default function StartScreen({ setStep }) {
  const nameRef = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    console.log("Submitted name:", name);
    setStep(2);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <TextField label="Name" variant="outlined" inputRef={nameRef} />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
}
