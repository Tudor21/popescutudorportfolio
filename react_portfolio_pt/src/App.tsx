import React from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import { GlobalStyles } from "./styles/GlobalStyles";
import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";
import { useMetricConverter } from "./hooks/UseMetricConverter";
import { theme } from "./App.theme";

function App() {
  const { convertPxToVw, convertPxToVh } = useMetricConverter();

  return (
    <ThemeProvider theme={{ ...theme, convertPxToVw, convertPxToVh }}>
      <LanguageProvider>
        <GlobalStyles />
        <Home />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
