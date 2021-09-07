import { CURRENCIES, PRODUCT_ACTIONS } from "../../helpers/constants";
import Button from "../button/button";
import classes from "./product.module.css";

const Product = ({ product, productManager }) => {
  const currentCurrency = CURRENCIES.pound;
  return (
    <div className={`product-ruler ${classes.product}`}>
      <span>{product.name}</span>
      <div>
        <span className={classes.product__amount}>
          {currentCurrency} {product.amount}
        </span>
        <Button
          label="Add"
          disabled={product.isDisabled}
          onClickEvent={productManager.bind(
            this,
            PRODUCT_ACTIONS.add,
            product.id
          )}
        />
      </div>
    </div>
  );
};

export default Product;
