// src/contexts/ProductsContext.tsx
import React, { createContext, useContext, ReactNode, useState } from "react";
import { Produto } from "../interfaces/Produto";

// Criar o contexto
interface ProductsContextType {
  produtos: Produto[];
  setProdutos: React.Dispatch<React.SetStateAction<Produto[]>>;
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

// Provedor do contexto
export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [produtos, setProdutos] = useState<Produto[]>([
    {
      id: 1,
      nome: "Expresso Tradicional",
      preco: 9.99,
      imagemUrl: "src/assets/images/Coffees/expresso_tradicional.svg",
      quantidade: 1,
      descricao: "O tradicional café feito com água quente e grãos moídos",
      categoria: ["Tradicional"]
    },
  ]);

  return (
    <ProductsContext.Provider value={{ produtos, setProdutos }}>
      {children}
    </ProductsContext.Provider>
  );
};

// Hook para acessar o contexto
export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
};
