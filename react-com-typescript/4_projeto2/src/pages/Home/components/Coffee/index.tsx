import { Produto } from "../../../../interfaces/Produto";
import { CoffeeContainer, Label } from "./styles";

interface CoffeeProps {
  produto: Produto; // Aqui estamos dizendo que a prop será um único produto, não um array
}

export const Coffee = ({ produto }: CoffeeProps) => {
  return (
    <CoffeeContainer>
      <img src={produto.imagemUrl} alt="" />
      <Label>
        {produto.categoria}
      </Label>
      <h2>{produto.nome}</h2>
      <p>{produto.preco}</p>
    </CoffeeContainer>
  );
};