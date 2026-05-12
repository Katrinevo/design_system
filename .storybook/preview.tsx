import React from "react";
import type { Preview }
from "@storybook/react";

import { ThemeProvider }
from "styled-components";

import { theme }
from "../packages/themes/theme";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    )
  ]
};

export default preview;