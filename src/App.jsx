import { Toaster } from "sonner";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "@/components/shared/AppRoutes.jsx";
import theme from "./theme.jsx";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster position="top-center" richColors />
        <ThemeProvider theme={theme}>
          <AppRoutes />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
