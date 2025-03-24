import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { TransactionArray } from "../interfaces/Transaction";

const fetchTransactions = async (): Promise<TransactionArray> => {
  const response = await axios
    .get<TransactionArray>("http://localhost:3000/transactions")
    .then((response) => response.data)
    .catch(() => []);
  return response;
};

const searchTransactions = async (
  searchQuery: string
): Promise<TransactionArray> => {
  const response = await axios
    .get<TransactionArray>(
      `http://localhost:3000/transactions?search=${searchQuery}`
    )
    .then((response) => response.data)
    .catch(() => []);
  return response;
};

export const useManageTransactions = (
  action: number,
  query?: string
  //transactionId?: number
) => {
  // Para busca de transações
  if (action === 1) {
    return useQuery<TransactionArray>({
      queryKey: ["transactions"],
      queryFn: fetchTransactions,
    });
  }

  // Para busca de transações por string
  if (action === 2 && query) {
    return useQuery<TransactionArray>({
      queryKey: ["transactions", query],
      queryFn: () => searchTransactions(query),
    });
  }

  // Caso não tenha uma ação definida, retornar nada ou erro.
  return { data: null, isLoading: false, isError: false };
};
