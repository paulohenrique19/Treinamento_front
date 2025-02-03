import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

import './App.css'
import { Header } from './components/Header'
import { Section } from "./components/Section";
import { CoffeeList } from "./components/CoffeeList";

import { Produto } from "./interfaces/Produto"


const produtos: Produto[] = [
  {
      id: 1,
      nome: "Café Expresso",
      preco: 9.99,
      imagemUrl: "https://example.com/cafe-expresso.jpg",
      quantidade: 1
  },
  {
      id: 2,
      nome: "Cappuccino",
      preco: 12.50,
      imagemUrl: "https://example.com/cappuccino.jpg",
      quantidade: 1
  },
  {
      id: 3,
      nome: "Latte",
      preco: 11.00,
      imagemUrl: "https://example.com/latte.jpg",
      quantidade: 1
  },
  {
      id: 4,
      nome: "Macchiato",
      preco: 10.30,
      imagemUrl: "https://example.com/macchiato.jpg",
      quantidade: 1
  },
  {
      id: 5,
      nome: "Americano",
      preco: 8.50,
      imagemUrl: "https://example.com/americano.jpg",
      quantidade: 1
  },
  {
    id: 5,
    nome: "Irlandes",
    preco: 11.50,
    imagemUrl: "https://example.com/irlandes.jpg",
    quantidade: 1
  },
];


function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header/>
      <Section />
      <CoffeeList produtos={produtos}/>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
