import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from 'react-router-dom'

import './App.css'

import { Router } from "./Router"
import { defaultTheme } from "./styles/themes/default";




function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
