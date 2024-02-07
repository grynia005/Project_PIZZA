import { useDispatch, useSelector } from "react-redux";
import { Input } from "../Input/Input";
import { loginUser } from "../../redux/slice/userSlice";
import { Button } from "../Button/Button";
import { useState } from "react";

const UserForm = () => {
  const [errorLog, setErrorLog] = useState("");
  const [userLog, setUserLog] = useState("");

  const data = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleUserName = (event) => {
    const value = event.target.value;
    setUserLog(value);
  };

  const validateLogin = (event) => {
    const value = event.target.value;

    if (value.trim() === "") {
      setErrorLog("Введіть своє ім'я");
    } else if (value.length < 2) {
      setErrorLog("Занадто коротке ім'я");
    } else {
      setErrorLog("");
    }
  };

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    if (errorLog) {
      return;
    } else {
      dispatch(loginUser(userLog));
      setUserLog("");
      console.log("Go-Go-Go, Form has been planted");
    }
  };

  return (
    <div className="form_box">
      <h2>The Best Rock Pizza</h2>
      <h1>У будь-якій незрозумілій ситуації краще поїсти</h1>
      <h4>Будь ласка, вкажіть ваше ім'я</h4>
      <form onSubmit={handleSubmitForm}>
        <Input
          type="text"
          value={userLog}
          onChange={handleUserName}
          onBlur={validateLogin}
        />
        <Button type="submit" onClick={() => console.log(`${data.login}`)} />
        {errorLog && <p>{errorLog}</p>}
      </form>
    </div>
  );
};

export { UserForm };
