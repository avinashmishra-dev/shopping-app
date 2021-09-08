import { Fragment } from "react";
import { QUANTITY_BTN_ACTIONS } from "../../helpers/constants";

const QuantityButton = ({ quantity, quantityHandler }) => {
  return <Fragment>
      <button onClick={quantityHandler.bind(this, QUANTITY_BTN_ACTIONS.add)}>+</button>
      {quantity}
      <button onClick={quantityHandler.bind(this, QUANTITY_BTN_ACTIONS.sub)}>-</button>
      </Fragment>;
};

export default QuantityButton;
