import React from "react";
import "./index.scss";
export default function Product(props) {
  const { product } = props;

  return (
    <div className="container-product">
      <p>Descripción:{product.description}</p>
      <p>Marca: {product.brand}</p>
      <span>Precio: {product.price}</span>
    </div>
  );
}
