import { 
  HeaderContainer, 
  Logo, 
  Local, 
  CartIcon,
  CartImage, 
  Separator 
} from "./styles";

import { NavLink } from 'react-router-dom'



export const Header = () => {
  return (
    <HeaderContainer>
        <Logo />
        <Separator>
          <Local>
            <img src="src/assets/images/Home/LocalIcon.svg" alt="" />
            <p>Chapecó, SC</p>
          </Local>
          <NavLink to="/payment" title="Pagamento">
            <CartIcon>
              <CartImage />
            </CartIcon>
          </NavLink>
        </Separator>
    </HeaderContainer>
  );
};
