import { CURRENCIES } from "../../helpers/constants";
import classes from "./quantity-manager.module.css";

const QuantityManager = ({ productMetaInfo, productCartInfo }) => {
  return (
    <div>
      <div className={`product-ruler ${classes.product}`}>
        <span>{productMetaInfo.name}</span>
        <span>{productMetaInfo.amount}</span>
        <span className="pull-right">{productCartInfo.quantity}</span>
        {/*ABOVE LINE WILL BE REMOVED BY ADD/SUB Component*/}
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
