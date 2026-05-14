import {
 CommandPalette
} from "./";

export default {
 title:
  "Design System/ComPalette",
 component:
  CommandPalette
};

export const Default = {
 args: {
  commands: [
   {
    id: 1,
    title: "Open settings"
   },
   {
    id: 2,
    title: "Create file"
   },
   {
    id: 3,
    title: "Delete project"
   },
   {
    id: 4,
    title: "Run build"
   }
  ]
 }
};