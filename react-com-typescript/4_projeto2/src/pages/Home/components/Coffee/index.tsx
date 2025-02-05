import { useState } from "react";
import { Produto } from "../../../../interfaces/Produto";
import { 
    CoffeeContainer, 
    Label,
    Descricao,
    Separator,
    Preco, 
    AddRemove
      } from "./styles";

interface CoffeeProps {
  produto: Produto; // Aqui estamos dizendo que a prop será um único produto, não um array
}

export const Coffee = ({ produto }: CoffeeProps) => {

  const [CartItemQuantity, setCartItemQuantity] = useState(0)

  return (
    <CoffeeContainer>
      <img src={produto.imagemUrl} alt="" />
      <Label>
        {produto.categoria?.map((pdr, index) => (
          <p key={index}>{pdr.toUpperCase()}</p>
        ))}
      </Label>
      <h2>{produto.nome}</h2>
      <Descricao>
          <p>{produto.descricao}</p>
      </Descricao>
      <Separator>
        <Preco>
          <p>R$</p>
          <p>{produto.preco}</p>
        </Preco>
        <AddRemove>
          <p>+</p>
          <p>{CartItemQuantity}</p>
          <p>-</p>
        </AddRemove>
      </Separator>

    </CoffeeContainer>
  );
};

