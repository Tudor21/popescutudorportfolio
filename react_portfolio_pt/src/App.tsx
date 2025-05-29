import { LanguageProvider } from "./contexts/LanguageContext";
import { GlobalStyles } from "./styles/GlobalStyles";
import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";
import { useMetricConverter } from "./hooks/UseMetricConverter";
import { theme } from "./App.theme";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";

function App() {
  const { convertPxToVw, convertPxToVh } = useMetricConverter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const minLoadingTime = 1000;
    const startTime = Date.now();

    const loadTimer = setTimeout(() => {
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(minLoadingTime - elapsed, 0);
      
      setTimeout(() => {
        setLoading(false);
      }, remainingTime);
    }, 500);

    return () => clearTimeout(loadTimer);
  }, []);

  const handleLoaderExited = () => {
    console.log('Loader animation completed and exited');
  };

  return (
    <ThemeProvider theme={{ ...theme, convertPxToVw, convertPxToVh }}>
      <LanguageProvider>
        <GlobalStyles />
        <Loading show={loading} onExited={handleLoaderExited} />
        {!loading && <Home />}
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;