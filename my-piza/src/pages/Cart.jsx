import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "../components/CartBox/CartItems/CartItem";
import { useNavigate } from "react-router-dom";
import { Container } from "../components/Container/Container";
import { Button } from "../components/Button/Button";
import { clearCart, totalPrice } from "../redux/slice/cartSlice";
import { IoArrowBackCircleOutline } from "react-icons/io5";

import "./Cart.scss";

const Cart = () => {
  const cartPiza = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    console.log("clear");
    dispatch(clearCart());
  };
  const navigate = useNavigate();

  const handleNavigate = (to) => {
    navigate(to);
  };

  const getTotalPrice = () => {
    dispatch(totalPrice());
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
    <Container>
      <div className="cart_box">
        <h3>Замовлення:</h3>
        {pizza ? (
          <div className="cart_list">
            <Button
              call={() => {
                handleNavigate("/");
              }}
              title={<IoArrowBackCircleOutline />}
            />

            <ul className="cart_list_pizza">{cartList}</ul>
            <Button
              className="order_button"
              call={() => {
                handleNavigate("/order/new");
                getTotalPrice();
              }}
              title="Замовити"
            />
            <Button
              className="clear_cart_button"
              call={handleClearCart}
              title="Очистити"
            />
          </div>
        ) : (
          nothing
        )}
      </div>
    </Container>
  );
};
export { Cart };
