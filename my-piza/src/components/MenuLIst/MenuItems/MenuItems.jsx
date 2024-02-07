import { useDispatch } from "react-redux";
import "./MenuItems.scss";
import { addToCart } from "../../../redux/slice/cartSlice";

const MenuItems = ({ pizza }) => {
  const dispatch = useDispatch();

  const ingredients = pizza.ingredients.map((ingr, index) => (
    <span key={index}>{ingr}</span>
  ));

  const handleAddToCart = () => {
    dispatch(addToCart(pizza));
  };
  return (
    <>
      <div className="pizza_card">
        <img src={pizza.imageUrl} alt={pizza.name} />
        <div className="pizza_title">
          <h3>{pizza.name}</h3>
          <br />
          <p>{ingredients}</p>
        </div>
        <div className="price_pizza">
          <h4>{pizza.unitPrice} $</h4>
          <button onClick={handleAddToCart}>Поласувати</button>
        </div>
      </div>
    </>
  );
};
export { MenuItems };
