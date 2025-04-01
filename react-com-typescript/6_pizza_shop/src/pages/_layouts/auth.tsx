import { Outlet } from "react-router-dom";
import { Container } from "./styles/auth_styles"


export function AuthLayout() {
  return (
    <Container>
        <h1>Autenticação</h1>

        <div>
          <Outlet />
        </div>
    </Container>
  );
}
