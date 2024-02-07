import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../Input/Input";
import "./FormOrder.scss";
import { Button } from "../Button/Button";
import { selectPriority } from "../../redux/slice/cartSlice";
import { schema } from "../../validation/validation";
import { yupResolver } from "@hookform/resolvers/yup";

const FormOrder = () => {
  const customerName = useSelector((state) => state.user.login);
  const { totalPrice, priority } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
     errors,
    reset,
  } = useForm({
    defaultValues: {
      name: customerName,
      phone: "",
      address: "",
      priority
    },
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmitOrder = (data) => {
    console.log(data);
    reset();
  };

  const handleOrderPizza = () => {};
  const handlePriority = (event) => {
    const prior = event.target.checked;
    dispatch(selectPriority(prior));
  };

  return (
    <>
      <h2>Вже зголодніли? Поїхали!!!</h2>
      <form className="form_order" onSubmit={handleSubmit(onSubmitOrder)}>
        <div>
          <label htmlFor="name"> Вкажіть Ваше ім'я:</label>
          <Input
            control={control}
            name="name"
            id="name"
            type="text"
            placeholder="Ім'я"
          />
        </div>

        <div>
          <label htmlFor="phone">Вкажіть Ваш номер</label>
          <Input control={control} name="phone" id="phone" type="text" />
        </div>

        <div>
          <label htmlFor="address">Адреса доставки</label>
          <Input control={control} name="address" id="address" type="text" />
        </div>

        <div>
          <label htmlFor="priority">Виберіть свій пріоритет</label>
          <Input
            control={control}
            name="priority"
            id="priority"
            type="checkbox"
            handlePriority={() => {
              handlePriority(event);
            }}
          />
        </div>

        <div className="submit_box">
          <Button type="submit" title={`Доставити ПІЦЦУ ЗА:`} />
          <span>{`$${totalPrice}.00 БАКСА`}</span>
        </div>
      </form>
    </>
  );
};

export { FormOrder };
