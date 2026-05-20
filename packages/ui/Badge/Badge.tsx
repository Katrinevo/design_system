import React from "react";
import { Wrapper }
from "./Badge.styles";

import {
 BadgeProps
} from "./Badge.types";

export const Badge:
React.FC<BadgeProps> = ({
 text,
 variant = "default"
}) => (
 <Wrapper
   variant={variant}
 >
   {text}
 </Wrapper>
);