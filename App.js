import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}></ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
