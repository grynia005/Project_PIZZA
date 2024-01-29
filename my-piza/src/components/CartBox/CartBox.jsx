import { useSelector } from "react-redux";
import { CartItem } from "./CartItems/CartItem";
import "./CartBox.scss";

const CartBox = () => {
  const cartPiza = useSelector((state) => state.cart.items);
  let pizza = false;

  if (cartPiza.length > 0) {
    pizza = true;
  }

  const cartList = cartPiza.map((item) => (
    <li key={item.id}>
      <CartItem pizza={item} />
    </li>
  ));

  const nothing = <h4>Кошик порожній</h4>;

  return (
    <div className="cart_box">
      <h3>Замовлення:</h3>
      {pizza ? <ul className="cart_list_pizza">{cartList}</ul> : nothing}
    </div>
  );
};
export { CartBox };
