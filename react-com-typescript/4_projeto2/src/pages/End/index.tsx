import { Container, Data } from "./styles";

export const End = () => {
    const endereco = JSON.parse(localStorage.getItem("endereco") || "{}");


    const typePagament = (value: any) => {

        let result = null

        if (value === 1)
        {
            return (
                result = "Dinheiro"
            )
        }
        if (value === 2)
        {
            return (
                result = "Cartão Débito/Crédito"
            )
        }
        if (value === 3)
        {
            return (
                result = "PIX"
            )
        }
    }

    return (
      <Container>
        <h2>Endereço de Entrega</h2>
        <Data>
            <p><strong>Nome:</strong> {endereco.nome}</p>
            <p><strong>Rua:</strong> {endereco.rua}</p>
            <p><strong>Cidade:</strong> {endereco.cidade}</p>
            <p><strong>CEP:</strong> {endereco.cep}</p>
            <p><strong>Forma de pagamento:</strong> {typePagament(endereco.formaPagamento)}</p>
        </Data>
      </Container>
    );
  };
  