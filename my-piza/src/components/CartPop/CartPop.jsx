import { useSelector } from "react-redux";
import { Cardpop } from "../Cardpop/Cardpop";
import "./CartPop.scss";

const CartPop = () => {
  const pizzaList = useSelector((state) => state.cart.items);
  let pizza = false;
  if (pizzaList.length > 0) {
    pizza = true;
  }

  const list = pizzaList.map((el) => (
    <li key={el.id}>
      <Cardpop pizza={el} />
    </li>
  ));
  const nothing = <p>Кошик порожній</p>;
  return (
    <div className="cart_pop">
      <h4>Кошик</h4>
      {pizza ? <ul>{list}</ul> : nothing}
    </div>
  );
};
export { CartPop };
