import React, {useState} from "react";
import "./product.css";
import Img from "./Img";


function Product(props) {
  
  const [count, setCount] = useState([]);
  
  fetch('https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json')
      .then(response => response.json())
      .then(data => {
        var temp = [];
        Object.keys(data).forEach( childSnap => temp.push(data[childSnap]) );
        setCount(temp);
      });
  return (
    <div className="p">
      <h1>Products</h1>
      <div className="p-list">
      { 
        count.map((key) => {
       return (<div className="p-item">
          <img src={key.productImage} alt="" />
          <div className="p-item-body">
            <div className="p-item-name">
              <h1>{key.productName}</h1>
            </div>
            <div className="p-price">
              <div className="p-star">
                <Img />
                <Img />
                <Img />
                <Img />
                <Img />
              </div>
              <div className="p-old-price">
                {key.oldPrice}/-
              </div>
              <div className="p-new-price">
                {key.newPrice}/-
              </div>
            </div>
            <button className="p-btn" onClick={props.handleItem}>Add to cart</button>
          </div>
        </div>)
          
        })
      }
      </div>
    </div>
  );
}

export default Product;
