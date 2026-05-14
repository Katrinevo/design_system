import React, { useState } from "react";
import {
  Wrapper,
  Trigger,
  Menu,
  Option
} from "./Dropdown.styles";

import {
  DropdownProps
} from "./Dropdown.types";

export const Dropdown:
React.FC<DropdownProps> = ({
  options
}) => {
  const [open, setOpen] =
    useState(false);

  const [selected, setSelected] =
    useState(options[0]);

  return (
    <Wrapper>
      <Trigger
        onClick={() =>
          setOpen(!open)
        }
      >
        {selected}
      </Trigger>

      {open && (
        <Menu>
          {options.map((o) => (
            <Option
              key={o}
              onClick={() => {
                setSelected(o);
                setOpen(false);
              }}
            >
              {o}
            </Option>
          ))}
        </Menu>
      )}
    </Wrapper>
  );
};