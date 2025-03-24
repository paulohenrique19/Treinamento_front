import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import { TransactionArray } from "../interfaces/Transaction";

// Função para buscar todas as transações
const fetchTransactions = async (): Promise<TransactionArray> => {
  const response = await axios
    .get<TransactionArray>("http://localhost:3000/transactions")
    .then((response) => response.data)
    .catch(() => []);

  console.log("Resposta " + response)
  return response;
};

// Função para buscar transações com base no filtro de busca
const searchTransactions = async (
  searchQuery: string | undefined
): Promise<TransactionArray> => {

  console.log("teste " + searchQuery)

  const response = await axios
    .get<TransactionArray>(`http://localhost:3000/transactions?description=${searchQuery}`)
    .then((response) => response.data)
    .catch(() => []);

  console.log("Resposta " + response)
  return response;
};

// Tipo para o retorno do hook useManageTransactions
type UseManageTransactionsResult = {
  searchTransactions: (searchQuery: string) => Promise<TransactionArray>;
  queryData?: UseQueryResult<TransactionArray, Error>;
  data?: TransactionArray;
};

// Hook personalizado para gerenciar transações
export const useManageTransactions = (
  action: number,
  query?: string
): UseManageTransactionsResult => {



  if (action === 1) {
    // Se a ação for 1, busca todas as transações
    const queryData = useQuery<TransactionArray>({
      queryKey: ["transactions"],
      queryFn: fetchTransactions,
    });
    return { queryData, data: queryData.data ?? [], searchTransactions: () => Promise.resolve([]) };
  }

  if (action === 2) {
    const queryData = useQuery<TransactionArray>({
      queryKey: ["transactions", query],
      queryFn: () => searchTransactions(query),
    });

    return {
      searchTransactions: (searchQuery: string) => searchTransactions(searchQuery),
      queryData,
      data: queryData.data ?? [],
    };
  }

  // Caso não haja uma ação válida, retorna uma função dummy
  return { data: [], searchTransactions: () => Promise.resolve([]) };
};
