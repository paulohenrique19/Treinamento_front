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
}

// Tipos das ações
type Action =
  | { type: "ADD_ITEM"; produto: Produto }
  | { type: "REMOVE_ITEM"; produtoId: number }
  | { type: "UPDATE_ITEM"; produtoId: number; quantidade: number };

// Estado inicial do carrinho
const initialState: CartState = {
  items: [],
};

// Reducer para gerenciar o carrinho
const cartReducer = (state: CartState, action: Action): CartState => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItem = state.items.find(item => item.produto.id === action.produto.id);
      if (existingItem) {
        // Se o item já existir, aumenta a quantidade
        return {
          ...state,
          items: state.items.map(item =>
            item.produto.id === action.produto.id
              ? { ...item, quantidade: item.quantidade + 1 }
              : item
          ),
        };
      } else {
        // Se o item não existir, adiciona o item ao carrinho
        return {
          ...state,
          items: [...state.items, { produto: action.produto, quantidade: 1 }],
        };
      }
    case "REMOVE_ITEM":
      // Remove o item do carrinho
      return {
        ...state,
        items: state.items.filter(item => item.produto.id !== action.produtoId),
      };
    case "UPDATE_ITEM":
      // Atualiza a quantidade de um item
      return {
        ...state,
        items: state.items.map(item =>
          item.produto.id === action.produtoId
            ? { ...item, quantidade: action.quantidade }
            : item
        ),
      };
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
