import React from "react";
import "./App.css";

const ProductCards = ({ image, name, price }) => {
  return (
    <div id="main-container">
      <div className="item-container">
        <img src={image} style={{ width: "185px", height: "185px" }} />
        <span
          style={{ fontSize: "15px", color: "#212121", fontWeight: "bold" }}
        >
          {name}
        </span>
        <span
          style={{
            fontSize: "18px",
            color: price > 50000 ? "#f85606" : "blue",
            fontFamily: "Roboto",
            fontWeight: "bold",
          }}
        >
          Rs.{price}
        </span>
      </div>
    </div>
  );
};

export default ProductCards;
