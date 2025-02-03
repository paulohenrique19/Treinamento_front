import { 
    CoffeeListContainer,
    Title,
    Coffees
} from "./styles";
import { Produto } from "../../interfaces/Produto"
import { Coffee } from "../Coffee/index.tsx"

interface CoffeeListProps {
    produtos: Produto[];
}

export const CoffeeList = ({ produtos }: CoffeeListProps) => {
  return (
    <CoffeeListContainer>
        <Title>Nossos cafés</Title>
        <Coffees>
        {produtos.map((produto) => (
          <Coffee key={produto.id} produto={produto} />
        ))}        
        </Coffees>
    </CoffeeListContainer>
  );
};
