import React from "react";
import { ThemeProvider } from "styled-components";

import { theme }
from "../../packages/themes/theme";

import {
  KidsJoyLanding
} from "./pages/KidsJoyLanding";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <KidsJoyLanding />
    </ThemeProvider>
  );
}

export default App;