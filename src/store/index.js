import { create } from "zustand";
// import { devtools, persist } from 'zustand/middleware';

const initialState = {
  userName: "",
  score: 0,
  step: 1,
};

const globalState = (set) => ({
  ...initialState,
  setUserName: (userName) => set({ userName }),
  setScore: (score) => set({ score }),
  setStep: (step) => set({ step }),
});

const useGlobalState = create(globalState);

export default useGlobalState;
