import React,
{
 useState
} from "react";

import {
 Overlay,
 Palette,
 Search,
 CommandItem
} from "./ComPalette.styles";

import {
 CommandPaletteProps
} from "./ComPalette.types";

export const CommandPalette:
React.FC<CommandPaletteProps> = ({
 commands
}) => {
 const [query, setQuery] =
  useState("");

 const filtered =
  commands.filter((c) =>
   c.title
    .toLowerCase()
    .includes(
      query.toLowerCase()
    )
 );

 return (
  <Overlay>
   <Palette>
    <Search
      placeholder="Type a command..."
      value={query}
      onChange={(e) =>
        setQuery(
          e.target.value
        )
      }
    />

    {filtered.map((c) => (
      <CommandItem
        key={c.id}
      >
        {c.title}
      </CommandItem>
    ))}
   </Palette>
  </Overlay>
 );
};