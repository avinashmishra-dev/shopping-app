import react, { useState } from "react";
import ProductsList from "../../components/products-list/products-list";
import classes from "./mart.module.css";

const Mart = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Bread",
      amount: 1.1,
    },
    {
      id: 2,
      name: "Milk",
      amount: 0.5,
    },
    {
      id: 3,
      name: "Cheese",
      amount: 0.9,
    },
    {
      id: 4,
      name: "Soup",
      amount: 0.6,
    },
    {
      id: 5,
      name: "Butter",
      amount: 1.2,
    },
  ]);
  return <div className={classes.mart}>
      <ProductsList products={products} label='Products'></ProductsList>
  </div>;
};

export default Mart;
