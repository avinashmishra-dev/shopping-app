import { useState } from "react";
import Cart from "../../components/cart/cart";
import ProductsList from "../../components/products-list/products-list";
import classes from "./mart.module.css";

const Mart = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Bread",
      amount: 1.1,
      isDisabled: false,
    },
    {
      id: 2,
      name: "Milk",
      amount: 0.5,
      isDisabled: false,
    },
    {
      id: 3,
      name: "Cheese",
      amount: 0.9,
      isDisabled: false,
    },
    {
      id: 4,
      name: "Soup",
      amount: 0.6,
      isDisabled: false,
    },
    {
      id: 5,
      name: "Butter",
      amount: 1.2,
      isDisabled: false,
    },
  ]);
  const [cart, setCart] = useState({});

  const productManager = (action, id) => {
    // updating products
    const foundIndex = products.findIndex((product) => product.id === id);
    const newProducts = [...products];
    newProducts[foundIndex] = { ...products[foundIndex], isDisabled: true };
    setProducts(newProducts);

    // updating cart
    const newCart = { ...cart };
    newCart[id] = {
      quantity: 1,
      discount: 0,
    };
    setCart(newCart);
  };

  return (
    <div className={classes.mart}>
      <ProductsList
        products={products}
        label="Products"
        productManager={productManager}
      />
      <Cart label="Basket" />
    </div>
  );
};

export default Mart;
