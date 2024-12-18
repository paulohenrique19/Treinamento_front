import styles from "./Button.module.css";
import { ButtonContainer, ButtonVariant } from "./Button.styles";

interface ButtonProps {
    variant?: ButtonVariant;
}

//define a cor 'primary' caso nenhuma seja passada na prop do componente
const Button = ({variant = 'primary'}: ButtonProps) => {
  return (
    <ButtonContainer variant={variant}>Enviar</ButtonContainer>
  )
}

export default Button