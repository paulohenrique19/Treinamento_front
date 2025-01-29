import { 
  HeaderContainer, 
  Logo, 
  Local, 
  CartIcon,
  CartImage, 
  Separator 
} from "./styles";



export const Header = () => {
  return (
    <HeaderContainer>
        <Logo />
        <Separator>
          <Local>
            <img src="src/assets/images/LocalIcon.svg" alt="" />
            <p>Chapecó, SC</p>
          </Local>
          <CartIcon>
            <CartImage />
          </CartIcon>
        </Separator>
    </HeaderContainer>
  );
};
