import React from "react";
import {
 ThemeProvider
} from "styled-components";

import {
 theme
} from "../packages/themes/theme";

import {
 KidsStoreHome
} from "./pages/KidsStoreHome";

function App() {
 return (
  <ThemeProvider
   theme={theme}
  >
   <KidsStoreHome />
  </ThemeProvider>
 );
}

export default App;