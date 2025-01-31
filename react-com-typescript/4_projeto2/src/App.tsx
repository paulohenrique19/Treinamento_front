import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

import './App.css'
import { Header } from './components/Header'
import { Section } from "./components/Section";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header/>
      <Section />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
