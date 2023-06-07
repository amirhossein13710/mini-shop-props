import React from "react";
import "./Products.css";

const Products = (props) => {
  return (
    <div>
      <ul className="products">
        {props.items.map((item) => {
          const {id,title,image,price,avalebleBrand,qty} = item;
          return (
            <li key={id}>
              <img src={image} alt="." />
              <p>{title}</p>
              <div className="product-price">
                <button onClick={()=>props.addProducts(item)}>افزودن به سبد خرید</button>
                <div className="price">{price}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
