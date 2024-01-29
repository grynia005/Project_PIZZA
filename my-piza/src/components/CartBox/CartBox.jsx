import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "./CartItems/CartItem";
import "./CartBox.scss";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../redux/cartSlice";

const CartBox = () => {
  const cartPiza = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    console.log("clear");
    dispatch(clearCart());
  };
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
    console.log("go back");
  };

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
      {pizza ? (
        <div className="cart_list">
          <ul className="cart_list_pizza">{cartList}</ul>
          <Button call={handleBackToHome} />
          <Button call={handleClearCart} title="Очистити" />
        </div>
      ) : (
        nothing
      )}
    </div>
  );
};
export { CartBox };
