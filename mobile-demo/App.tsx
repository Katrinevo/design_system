import React from "react";
import {
 SafeAreaView
} from "react-native";

import {
 ThemeProvider
} from "styled-components/native";

import {
 theme
} from "../packages/themes/theme";

import {
 Button
} from "../packages/ui/Button";

import {
 Input
} from "../packages/ui/Input";

import {
 Dropdown
} from "../packages/ui/Dropdown";

import {
 FAB
} from "../packages/ui/FAB";

export default function App() {
 return (
  <ThemeProvider theme={theme}>
   <SafeAreaView
    style={{
      flex:1,
      padding:20
    }}
   >
    <Input
     placeholder="name"
    />

    <Button
     title="Register"
    />

    <Dropdown
     label="Catalog"
     options={[
      "Books",
      "Toys"
     ]}
    />

    <FAB
     actions={[
      {
       id:1,
       icon:"✉"
      },
      {
       id:2,
       icon:"☎"
      }
     ]}
    />
   </SafeAreaView>
  </ThemeProvider>
 );
}