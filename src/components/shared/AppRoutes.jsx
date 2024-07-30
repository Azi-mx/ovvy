import { Route, Routes } from "react-router-dom";
import HomePage from "@/components/HomePage";
import Layout from "@/components/Layout";
import NoPage from "@/components/NoPage";
import TaskOne from "@/components/TaskOne/TaskOne";
import TaskThree from "@/components/TaskThree/TaskThree";
import TaskTwo from "@/components/TaskTwo/TaskTwo";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/game" element={<TaskOne />} />
        {/* <Route path="/game/play" element={<GameScreen />} />
            <Route path="/game/result" element={<ResultScreen />} /> */}
        <Route path="/shape" element={<TaskTwo />} />
        <Route path="/bin" element={<TaskThree />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}
