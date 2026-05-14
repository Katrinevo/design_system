import React from "react";
import { Fab }
from "./FAB.styles";

import {
 FABProps
} from "./FAB.types";

export const FAB:
React.FC<FABProps> = ({
 icon = "+",
 disabled = false,
 onPress
}) => (
 <Fab
   disabled={disabled}
   onClick={onPress}
 >
   {icon}
 </Fab>
);