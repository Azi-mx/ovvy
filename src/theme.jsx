import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6200EA", // Deep purple
      light: "#B388FF",
      dark: "#4A148C",
    },
    secondary: {
      main: "#00BFA5", // Teal
      light: "#64FFDA",
      dark: "#008E76",
    },
    background: {
      default: "#FAFAFA", // Very light gray
      paper: "#FFFFFF",
    },
    error: {
      main: "#FF3D00", // Bright orange-red
    },
    warning: {
      main: "#FFAB00", // Amber
    },
    info: {
      main: "#00B0FF", // Light blue
    },
    success: {
      main: "#00C853", // Green
    },
    text: {
      primary: "#212121", // Very dark gray
      secondary: "#757575", // Medium gray
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "8px",
          padding: "10px 24px",
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
          borderRadius: "16px",
        },
      },
    },
  },
});

export default theme;
