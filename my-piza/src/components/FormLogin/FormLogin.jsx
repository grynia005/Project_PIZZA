import { useDispatch, useSelector } from "react-redux";
import { Input } from "../Input/Input";
import { loginUser } from "../../redux/slice/userSlice";
import { Button } from "../Button/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validSchemaLogin } from "../../validation/validationLogin";

const UserForm = () => {
  const { control, handleSubmit, errors, reset } = useForm({
    defaultValues: {
      name: "",
    },
    resolver: yupResolver(validSchemaLogin),
    mode: "onSubmit",
  });

  const data = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSubmitForm = (evt) => {
    const userLogin = event.target.name.value;
    dispatch(loginUser(userLogin));
    reset();
  };

  return (
    <div className="form_box">
      <h2>The Best Rock Pizza</h2>
      <h1>У будь-якій незрозумілій ситуації краще поїсти</h1>
      <h4>Будь ласка, вкажіть ваше ім'я</h4>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <Input name="name" control={control} type="text" />
        <Button type="submit" title="LogIn" />
      </form>
    </div>
  );
};

export { UserForm };
