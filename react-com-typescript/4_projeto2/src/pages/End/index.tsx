import { Container, Data, Separator, Image } from "./styles";

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
        <Separator>
            <Data>
                <p>Entrega em: <strong> {endereco.rua}</strong></p>
                <p><strong> {endereco.cidade}</strong></p>
                <p>CEP: <strong> {endereco.cep}</strong></p>
                <p>Forma de pagamento: <strong>{typePagament(endereco.formaPagamento)}</strong></p>
            </Data>
            <Image>
                <img src="src/assets/images/End/Motorcycle.svg" alt="" />
            </Image>
        </Separator>
      </Container>
    );
  };
  