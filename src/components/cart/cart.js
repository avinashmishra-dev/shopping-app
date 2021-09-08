import QuantityManager from "../quantity-manager/quantity-manager";
import classes from "./cart.module.css";

const Cart = ({ products, cart, label, productQuantityHandler }) => {
  const cartBuilder = () => {
    const productsInCart = [];
    for (const productId in cart) {
      if (cart.hasOwnProperty(productId)) {
        const productInCart = cart[productId];
        const productInCartMetaInfo = products.find(
          (product) => product.id === +productId
        );
        productsInCart.push(
          <QuantityManager
            key={productId}
            productMetaInfo={productInCartMetaInfo}
            productCartInfo={productInCart}
            productQuantityHandler={productQuantityHandler}
          />
        );
      }
    }
    return productsInCart;
  };

  return (
    <div className={`card ${classes.cart}`}>
      <p className="card__label">{label}</p>
      {cartBuilder()}
    </div>
  );
};

export default Cart;
