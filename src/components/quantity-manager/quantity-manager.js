import { CURRENCIES } from "../../helpers/constants";
import QuantityButton from "../quantity-button/quantity-button";
import classes from "./quantity-manager.module.css";

const QuantityManager = ({
  productMetaInfo,
  productCartInfo,
  productQuantityHandler,
}) => {
  return (
    <div>
      <div className={`product-ruler ${classes.product}`}>
        <span className={classes.product__info}>{productMetaInfo.name}</span>
        <span className={classes.product__info}>
          {CURRENCIES.pound} {productMetaInfo.amount}
        </span>
        <div className={`pull-right ${classes.product__info}`}>
          <QuantityButton
            quantity={productCartInfo.quantity}
            quantityHandler={productQuantityHandler.bind(this, productMetaInfo.id)}
          />
        </div>
      </div>
      <div className={`pull-right highlight product-ruler`}>
        Savings {CURRENCIES.pound}?
      </div>
      <div className={`pull-right product-ruler`}>
        Item cost {CURRENCIES.pound}?
      </div>
    </div>
  );
};

export default QuantityManager;
