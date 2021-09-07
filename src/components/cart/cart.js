import classes from "./cart.module.css";

const Cart = ({ label }) => {
  return (
    <div className={`card ${classes.cart}`}>
      <p className="card__label">{label}</p>
    </div>
  );
};

export default Cart;
