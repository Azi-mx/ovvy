/* eslint-disable react/prop-types */
import { useRef } from "react";
import { Button, TextField } from "@mui/material";
import useGlobalState from "../../store";
import { toast } from "sonner";

export default function StartScreen() {
  const setStep = useGlobalState((state) => state.setStep); // import the setStep from the zustand store
  const setUserName = useGlobalState((state) => state.setUserName); // import the setUserName from the zustand store
  const nameRef = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    setUserName(name); // on submit set the name in the zustand store
    setStep(2);
    toast.success("Welcome " + name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Useing a ref instead of state because ref use karne se har baar component re-render nhi hoga */}
        <TextField
          label="Name"
          variant="outlined"
          inputRef={nameRef}
          className="w-80"
          placeholder="Please enter your username"
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
}
