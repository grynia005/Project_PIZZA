import { CartPop } from "../CartPop/CartPop";
import { TiShoppingCart, TiPhoneOutline } from "react-icons/ti";
import "./HeadMenu.scss";

const HeadMenu = ({ state, callOver, callDown }) => {
  return (
    <div className="head_menu">
      <TiShoppingCart onMouseEnter={callOver} onMouseLeave={callDown} />
      <a
        href="tel:+38099111111"
        target="blank"
        rel="noopener nofollov noreferrer"
      >
        <TiPhoneOutline />
      </a>
      {state && <CartPop />}
    </div>
  );
};

export { HeadMenu };
