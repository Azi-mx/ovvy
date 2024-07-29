import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Layout from "./components/Layout";
import NoPage from "./components/NoPage";
import TaskOne from "./components/TaskOne";
import TaskThree from "./components/TaskThree";
import TaskTwo from "./components/TaskTwo";

function App() {
  return (
    <>
      <BrowserRouter>
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
      </BrowserRouter>
    </>
  );
}

export default App;
