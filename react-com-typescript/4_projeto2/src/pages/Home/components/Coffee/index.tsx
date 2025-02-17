import { useState } from "react";
import { useCart } from "../../../../contexts/CartContext"; 
import { Produto } from "../../../../interfaces/Produto";
import { 
    CoffeeContainer, 
    Label,
    Descricao,
    Separator,
    Preco, 
    AddRemove,
    ConfirmAdd,
    ShoppingCartSimple
} from "./styles";

interface CoffeeProps {
  produto: Produto;
}

export const Coffee = ({ produto }: CoffeeProps) => {
  const [CartItemQuantity, setCartItemQuantity] = useState(0);
  const { state, dispatch } = useCart(); 

  const handleAddItem = () => {
    dispatch({ type: "ADD_ITEM", produto });
    setCartItemQuantity(CartItemQuantity + 1); 
  };

  const handleRemoveItem = () => {
    if (CartItemQuantity > 0) {
      dispatch({ type: "UPDATE_ITEM", produtoId: produto.id, quantidade: CartItemQuantity - 1 });
      setCartItemQuantity(CartItemQuantity - 1); 
    }
  };

  return (
    <CoffeeContainer>
      <img src={produto.imagemUrl} alt={produto.nome} />
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
          <p onClick={handleAddItem}>+</p>
          <p>{CartItemQuantity}</p>
          <p onClick={handleRemoveItem}>-</p>
        </AddRemove>
        <ConfirmAdd>
          <ShoppingCartSimple />
        </ConfirmAdd>
      </Separator>
    </CoffeeContainer>
  );
};
