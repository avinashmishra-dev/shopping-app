import Product from '../product/product';
import classes from './products-list.module.css'

const ProductsList = ({products, label, productManager}) => {
    return <div className={classes.products}>
        <p className={classes.products__label}>{label}</p>
        {products && products.map(product => <Product key={product.id} product={product} productManager={productManager}/>)}
    </div>
}

export default ProductsList;