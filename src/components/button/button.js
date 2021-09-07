import classes from "./button.module.css";

const Button = ({ onClickEvent, label, disabled }) => {
  return (
    <button
      onClick={onClickEvent}
      className={[classes.btn, disabled ? classes.btn__disabled : ""].join(" ")}
      disabled={disabled}
    >
      {label || "Click"}
    </button>
  );
};

export default Button;
