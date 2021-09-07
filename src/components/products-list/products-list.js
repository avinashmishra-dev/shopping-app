import react from 'react';
import Product from '../product/product';
import classes from './products-list.module.css'

const ProductsList = ({products, label}) => {
    console.log(products);
    return <div className={classes.products}>
        <p className={classes.products__label}>{label}</p>
        {products && products.map(product => <Product product={product}/>)}
    </div>
}

export default ProductsList;