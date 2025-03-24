import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { useManageTransactions } from "../../hooks/useManageTransactions";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";
import { dateFormatter, priceFormatter } from "../../utils/formatter";

export function Transactions() {

  // Use o hook para carregar todas as transações inicialmente
  const { data: transactions } = useManageTransactions(1);



  return (
    <div>
      <Header />
      {/*<Summary transactions={filteredTransactions ?? []} />*/}

      <TransactionsContainer>
        <SearchForm /> {/* Componente de busca */}

        <TransactionsTable>
          <tbody>
            {transactions?.map((transaction: any) => {
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
