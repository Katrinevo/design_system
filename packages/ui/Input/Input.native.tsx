import React from "react";
import styled from
"styled-components/native";

interface Props {
  placeholder?: string;
}

const Field =
 styled.TextInput`
  border-width: 3px;
  border-color:
   ${({ theme }) =>
     theme.colors.primaryDark};

  border-radius: 20px;

  padding: 18px;

  font-size: 18px;

  background: white;
`;

export const Input:
React.FC<Props> = ({
 placeholder
}) => (
 <Field
   placeholder={placeholder}
 />
);