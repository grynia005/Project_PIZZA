import { useController } from "react-hook-form";
import "./Input.scss";

const Input = (props) => {
  const { field, fieldState } = useController(props);
  const { type, placeholder, id, handlePriority } = props;

  const onChangeHandlePriority = () => {
    field.onChange();
    handlePriority();
  };
  const onChangeHandler =
    type === "checkbox" ? onChangeHandlePriority : field.onChange;
  return (
    <>
      <input
        {...field}
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
      {fieldState.error && <span>{fieldState.error.message}</span>}
    </>
  );
};

export { Input };
