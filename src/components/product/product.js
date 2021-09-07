import react from 'react';
import { CURRENCIES } from '../../helpers/constants';
import Button from '../button/button';
import classes from './product.module.css'

const Product = ({product}) => {
    const currentCurrency = CURRENCIES.pound;
    return <div className={classes.product}>
        <span>{product.name}</span>
        <div>
            <span className={classes.product__amount}>{currentCurrency} {product.amount}</span>
            <Button label="Add"/>
        </div>
    </div>;
}

export default Product;
