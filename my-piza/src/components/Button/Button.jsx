import "./Button.scss";
function Button({ call, type }) {
  return (
    <button type={type} onClick={call}>
      Погнали
    </button>
  );
}

export { Button };
