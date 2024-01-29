const Input = ({ type, value, onChange, onBlur }) => {
  return (
    <input type={type} value={value} onBlur={onBlur} onChange={onChange} />
  );
};

export { Input };
