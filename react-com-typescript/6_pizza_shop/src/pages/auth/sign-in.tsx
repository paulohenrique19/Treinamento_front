import { useEffect } from "react";
import { Container, 
        ContainerChild, 
        FormHeader, 
        FormContent, 
        Title, 
        Description, 
        InputContainer,
        ButtonInput,
        ButtonToggle} from "./sign-in";

import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { toast } from "sonner";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";



const signInForm = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof signInForm>



export default function SignIn() {

  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignInForm>()

  async function handleSignIn(data: SignInForm) {
      try {
  
          console.log(data)
  
          await new Promise((resolve) => setTimeout(resolve, 2000))
      
          toast.success('Enviamos um link de autenticação para seu e-mail', {
          action: {
              label: 'Reenviar',
              onClick: () => handleSignIn(data)
          }
          })
      } catch {
          toast.error('Erro ao fazer login')
      }
  }

  useEffect(() => {
      document.title = "Login";
    }, []);
    
  return (
    <Container>
      <ButtonToggle asChild variant="ghost">
        <Link to="/sign-up">Novo estabelecimento</Link>
      </ButtonToggle>
      <ContainerChild>
        <FormHeader>
          <Title>Acessar painel</Title>
          <Description>Acompanhe suas vendas pelo painel do parceiro!</Description>
        </FormHeader>

        <FormContent onSubmit={handleSubmit(handleSignIn)}>
          <InputContainer>
            <Label htmlFor="email">Seu e-mail</Label>
            <Input id="email" type="email" {...register('email')}/>
          </InputContainer>

          <ButtonInput disabled={isSubmitting} type="submit">Acessar painel</ButtonInput>
        </FormContent>

      </ContainerChild>
    </Container>
  );
}
