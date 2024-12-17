interface ButtonProps {
    color?: 'primary' | 'secondary' | 'danger' | 'success';
}

const Button = (props: ButtonProps) => {
  return (
    <button>Enviar</button>
  )
}

export default Button