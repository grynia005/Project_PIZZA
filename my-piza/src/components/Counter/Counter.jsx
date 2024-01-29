import { useDispatch, useSelector } from "react-redux";
import "./Counter.scss";
import { LiaSmileWinkSolid } from "react-icons/lia";
import { increment, decrement, defaultValue } from "../../redux/countSlice";

function CounterPizza() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handelIncrement = () => {
    dispatch(increment());
  };
  const handelDecrement = () => {
    dispatch(decrement());
  };
  const handelDefaultValue = () => {
    dispatch(defaultValue());
  };

  return (
    <div className="counter_box">
      <h2>Скільки піцци ти зможеш з'їсти?</h2>
      <h1>Я можу: {count} </h1>
      <div className="count_botton_box">
        <button onClick={handelIncrement}>Ще можу</button>
        <button onClick={handelDecrement}>Щось забагато</button>
        <button onClick={handelDefaultValue}>Давай заново</button>
      </div>
      <h2>
        <LiaSmileWinkSolid />
        <LiaSmileWinkSolid />
        <LiaSmileWinkSolid />
        <LiaSmileWinkSolid />
      </h2>
    </div>
  );
}

export { CounterPizza };
