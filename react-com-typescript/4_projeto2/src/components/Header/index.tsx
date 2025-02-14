import { 
  HeaderContainer, 
  Logo, 
  Local, 
  CartIcon,
  CartImage, 
  Separator,
  CartItemCount,  
} from "./styles";

import { NavLink } from 'react-router-dom'
import { useCart } from "../../contexts/CartContext";

export const Header = () => {
  const { state } = useCart();

  return (
    <HeaderContainer>
      <NavLink to="/" title="Menu">
        <Logo/>
      </NavLink>
      <Separator>
        <Local>
          <img src="src/assets/images/Home/LocalIcon.svg" alt="" />
          <p>Chapecó, SC</p>
        </Local>
        <NavLink to="/payment" title="Pagamento">
          <CartIcon>
            <CartItemCount>{state.totalItems}</CartItemCount>  
            <CartImage />
          </CartIcon>
        </NavLink>
      </Separator>
    </HeaderContainer>
  );
};
