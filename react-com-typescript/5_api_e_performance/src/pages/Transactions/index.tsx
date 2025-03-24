import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { useManageTransactions } from "../../hooks/useManageTransactions ";

import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";
import { dateFormatter, priceFormatter } from "../../utils/formatter";

export function Transactions() {
  const {
    data: transactions,
    //isLoading,
    //isError,
    //error,
  } = useManageTransactions(1);
  //   const [transactions, setTransactions] = useState<Transaction[]>([]);

  // na linha de baixo, mudamos o nome data para transactions, NÃO É TIPAGEM!
  /*
  const { data: transactions } = useQuery({
    queryKey: ["transactions"],
    queryFn: () => {
      return axios
        .get<TransactionArray>("http://localhost:3000/transactions")
        .then((response) => response.data);
    },
  });
  */

  //   useEffect(() => {
  //     if (data) {
  //       setTransactions(data);
  //     }
  //   }, [data]);

  return (
    <div>
      <Header />
      <Summary transactions={transactions ?? []} />

      <TransactionsContainer>
        <SearchForm />

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
