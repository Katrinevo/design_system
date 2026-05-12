import React from "react";
import {
 Wrapper,
 Label,
 StyledInput,
 Error
} from "./Input.styles";

import {
 InputProps
} from "./Input.types";

export const Input:
React.FC<InputProps> = ({
 label,
 placeholder,
 error
}) => (
 <Wrapper>
   <Label>{label}</Label>

   <StyledInput
    placeholder={placeholder}
   />

   {error && (
    <Error>{error}</Error>
   )}
 </Wrapper>
);