import "./Cardpop.scss";

const Cardpop = ({ pizza }) => {
  return (
    <div className="card_pop_box">

        <h5>{pizza.name}</h5>

      <div>
        <span>{pizza.qty} шт/</span>
        <span>{pizza.price} $</span>
      </div>
    </div>
  );
};

export { Cardpop };
