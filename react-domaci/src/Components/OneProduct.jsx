import React from "react";
import Button from "./Button";
import { MdAddCircle } from "react-icons/md";
import { MdEuro } from "react-icons/md";

function OneProduct({ product, onAdd }) {
  const stil = { margin: 1 + "em", borderStyle: "dotted" };
  return (
    <div className="card" style={stil}>
      <img src = {product.picture}/>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p className="card-text">{product.description}</p>
        <p className="card-price">{product.price} <MdEuro /> <Button className="btn" text ="Pretplati se" onClick={() => onAdd(product.title, product.price, product.id)}></Button>

        </p>
        
      </div>
      
    </div>
  );
}

export default OneProduct;