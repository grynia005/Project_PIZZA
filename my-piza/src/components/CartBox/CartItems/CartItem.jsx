import { RiDeleteBin5Line } from "react-icons/ri";
import "./CartItem.scss";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decrementQtyPizza,
  deleteFromCart,
} from "../../../redux/cartSlice";

const CartItem = ({ pizza }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(pizza));
  };
  const handleDeleteFromCart = () => {
    dispatch(deleteFromCart(pizza));
  };

  const handleDecrementQtyPizza = () => {
    dispatch(decrementQtyPizza(pizza));
  };

  return (
    <div className="catr_box">
      <div className="cart_flex">
        <div>
          <img src={pizza.imageUrl} alt={pizza.name} />
          <h3>{pizza.name}</h3>
        </div>
        <div>
          <div>
            <button onClick={handleDecrementQtyPizza}>-</button>
            <h4>{pizza.qty}</h4>
            <button onClick={handleAddToCart}>+</button>
          </div>
          <div>
            <h4>{pizza.price} $</h4>
            <button onClick={handleDeleteFromCart}>
              <RiDeleteBin5Line />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export { CartItem };
