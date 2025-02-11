// src/contexts/CartContext.tsx
import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { Produto } from "../interfaces/Produto";

// Definindo a estrutura do carrinho
interface CartItem {
  produto: Produto;
  quantidade: number;
}

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalValue: number;  // Adicionando o total de valor dos itens
}

// Tipos das ações
type Action =
  | { type: "ADD_ITEM"; produto: Produto }
  | { type: "REMOVE_ITEM"; produtoId: number }
  | { type: "UPDATE_ITEM"; produtoId: number; quantidade: number };

// Estado inicial do carrinho
const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalValue: 0,  // Inicializamos com 0
};

// Função para calcular o valor total
const calculateTotalValue = (items: CartItem[]): number => {
  return items.reduce((acc, item) => acc + item.produto.preco * item.quantidade, 0);
};

// Reducer para gerenciar o carrinho
const cartReducer = (state: CartState, action: Action): CartState => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItem = state.items.find(item => item.produto.id === action.produto.id);
      let updatedItems;
      if (existingItem) {
        // Se o item já existir, aumenta a quantidade
        updatedItems = state.items.map(item =>
          item.produto.id === action.produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      } else {
        // Se o item não existir, adiciona o item ao carrinho
        updatedItems = [...state.items, { produto: action.produto, quantidade: 1 }];
      }
      
      // Calcular o total de itens e o total de valor
      const totalItems = updatedItems.reduce((acc, item) => acc + item.quantidade, 0);
      const totalValue = calculateTotalValue(updatedItems);

      return { ...state, items: updatedItems, totalItems, totalValue };

    case "REMOVE_ITEM":
      const filteredItems = state.items.filter(item => item.produto.id !== action.produtoId);
      
      // Calcular o total de itens e o total de valor
      const totalItemsAfterRemoval = filteredItems.reduce((acc, item) => acc + item.quantidade, 0);
      const totalValueAfterRemoval = calculateTotalValue(filteredItems);

      return { ...state, items: filteredItems, totalItems: totalItemsAfterRemoval, totalValue: totalValueAfterRemoval };

    case "UPDATE_ITEM":
      const updatedItemsForQuantity = state.items.map(item =>
        item.produto.id === action.produtoId
          ? { ...item, quantidade: action.quantidade }
          : item
      );

      // Calcular o total de itens e o total de valor
      const totalItemsAfterUpdate = updatedItemsForQuantity.reduce((acc, item) => acc + item.quantidade, 0);
      const totalValueAfterUpdate = calculateTotalValue(updatedItemsForQuantity);

      return { ...state, items: updatedItemsForQuantity, totalItems: totalItemsAfterUpdate, totalValue: totalValueAfterUpdate };

    default:
      return state;
  }
};

// Criando o contexto
const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

// Provedor do contexto
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para acessar o contexto
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
