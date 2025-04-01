import { useEffect } from "react";

export function SignIn() {

  useEffect(() => {
      document.title = "Login";
    }, []);

  return <h1>Login</h1>;
}
