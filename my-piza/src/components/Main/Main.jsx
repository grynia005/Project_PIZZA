import "./Main.scss";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export { Main };
