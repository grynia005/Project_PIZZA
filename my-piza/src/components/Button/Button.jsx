import "./Button.scss";
function Button({ className, call, type, title = "click" }) {
  return (
    <button className={className} onClick={call} type={type}>
      {title}
    </button>
  );
}

export { Button };
