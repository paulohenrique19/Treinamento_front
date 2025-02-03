import { Produto } from "../../interfaces/Produto";
import { CoffeeContainer } from "./styles";

interface CoffeeProps {
  produto: Produto; // Aqui estamos dizendo que a prop será um único produto, não um array
}

export const Coffee = ({ produto }: CoffeeProps) => {
  return (
    <CoffeeContainer>
      <h1>{produto.nome}</h1>
      <p>{produto.preco}</p>
    </CoffeeContainer>
  );
};