import { Outlet } from "react-router-dom";
import { Container } from "./styles/app_styles";
import { Header } from "@/components/header";

export function AppLayout() {
  return (
    <Container>
      <Header />

      <div>
        <Outlet />
      </div>
    </Container>
  );
}
