import React from "react";
import { ThemeProvider } from "styled-components";
import Routes from "./Routes";
import GlobalStyle from "./styles/global-styles";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
