import { NavLink } from "react-router-dom";
import "./Navigation.scss"

const Navigation = () => {
  return (
    <div className="nav_box">
      <nav>
        <NavLink to={"/log"}>LogIn</NavLink>
        <NavLink to={"/counter"}>Counter</NavLink>
        <NavLink to={"/cart"}>Cart</NavLink>
      </nav>
    </div>
  );
};

export { Navigation };
