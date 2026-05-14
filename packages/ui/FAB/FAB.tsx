import React,
{
 useState
} from "react";

import {
 Wrapper,
 Fab,
 ActionList,
 ActionButton
} from "./FAB.styles";

import {
 FABProps
} from "./FAB.types";

export const FAB:
React.FC<FABProps> = ({
 icon = "+",
 disabled = false,
 actions = []
}) => {
 const [open, setOpen] =
  useState(false);

 return (
  <Wrapper>
   {open && (
    <ActionList>
      {actions.map((a) => (
        <ActionButton
          key={a.id}
        >
          {a.icon}
        </ActionButton>
      ))}
    </ActionList>
   )}

   <Fab
    disabled={disabled}
    onClick={() =>
      setOpen(!open)
    }
   >
    {icon}
   </Fab>
  </Wrapper>
 );
};