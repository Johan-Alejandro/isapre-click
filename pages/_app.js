import '../styles/global.scss';  // Importa tus estilos globales
import { createTheme, ThemeProvider } from "@mui/material/styles";

let theme = createTheme({
  colors: {
    black: "000000",
    primary: "#066c8e",
    primary_deep: "#02212C",
    secondary: "#2E2E2E",
    white: "#FFFFFF",
    disabled: "#e8e8ef",
  }
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;