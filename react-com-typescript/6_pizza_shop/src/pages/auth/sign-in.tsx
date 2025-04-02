import { useEffect } from "react";
import { Container, 
        ContainerChild, 
        FormHeader, 
        FormContent, 
        Title, 
        Description, 
        InputContainer} from "./sign-in";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignIn() {
  useEffect(() => {
      document.title = "Login";
    }, []);
  return (
    <Container>
      <ContainerChild>
        <FormHeader>
          <Title>Acessar painel</Title>
          <Description>Acompanhe suas vendas pelo painel do parceiro!</Description>
        </FormHeader>

        {/*Aplicar o react hook form aqui */}
        <FormContent>
          <InputContainer>
            <Label htmlFor="email">Seu e-mail</Label>
            <Input id="email" type="email"/>
          </InputContainer>

          <Button className="w-full" type="submit">Acessar painel</Button>
        </FormContent>

      </ContainerChild>
    </Container>
  );
}
