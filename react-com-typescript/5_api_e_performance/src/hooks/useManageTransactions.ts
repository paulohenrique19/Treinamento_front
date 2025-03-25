import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { TransactionArray } from "../interfaces/Transaction";

const fetchTransactions = async (): Promise<TransactionArray> => {
  const response = await axios
    .get<TransactionArray>("http://localhost:3000/transactions")
    .then((response) => response.data)
    .catch(() => []); 
  console.log("Resposta", response);
  return response;
};

const searchTransactions = async (searchQuery: string): Promise<TransactionArray> => {

  console.log("Query string: ", searchQuery)
  const response = await axios
    .get<TransactionArray>(`http://localhost:3000/transactions?description=${searchQuery}`)
    .then((response) => response.data)
    .catch(() => []); 
  console.log("Resposta da busca", response);
  return response;
};

export const useManageTransactions = () => {
  const {
    data,
    isLoading,
    isError,
    refetch,
  } = useQuery<TransactionArray>({
    queryKey: ["transactions"], 
    queryFn: fetchTransactions, 
  });

  const transactions = data;
  

  const searchTransactionsFn = (searchQuery: string) => {
    return searchTransactions(searchQuery); 
  };

  

  return {
    transactions,
    isLoading,
    isError,
    searchTransactionsFn, 
    refetch,
  };
  
};
