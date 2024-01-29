import "./Button.scss";
function Button({ call, type, title = "click" }) {
  return (
    <button onClick={call} type={type}>
      {title}
    </button>
  );
}

export { Button };
