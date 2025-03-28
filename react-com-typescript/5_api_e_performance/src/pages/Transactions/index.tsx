import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { useManageTransactions } from "../../hooks/useManageTransactions";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { useState } from "react";

export function Transactions() {
  const [searchQuery, setSearchQuery] = useState(""); // Gerenciar o estado da pesquisa
  
  const { transactions, isLoading, isError } = useManageTransactions(searchQuery); // Passando searchQuery para o hook

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (isError) {
    return <div>Ocorreu um erro ao carregar as transações.</div>;
  }

  return (
    <div>
      <Header />
      <Summary transactions={transactions ?? []} />

      <TransactionsContainer>
        <SearchForm setSearchQuery={setSearchQuery} />

        <TransactionsTable>
          <tbody>
            {transactions?.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighLight variant={transaction.type}>
                      {transaction.type === "outcome" && "- "}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
