import { useEffect } from "react";

export function Dashboard() {

  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  return (
    <h1>Dashboard</h1>
  );
}
