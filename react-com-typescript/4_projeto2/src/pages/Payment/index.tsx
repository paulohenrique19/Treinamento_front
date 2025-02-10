// src/components/Cart/index.tsx
import { useCart } from "../../contexts/CartContext";
//import { CartItem } from "./styles";

export const Payment = () => {
  const { state } = useCart();

  return (
    <div>
      <h2>Carrinho</h2>
      {state.items.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div>
          {state.items.map(item => (
            <div key={item.produto.id}>
              <img src={item.produto.imagemUrl} alt={item.produto.nome} />
              <h3>{item.produto.nome}</h3>
              <p>Quantidade: {item.quantidade}</p>
              <p>Preço: R$ {item.produto.preco * item.quantidade}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
