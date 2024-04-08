import React from "react";
import ProductCards from "./ProductCards";
import { productData } from "./darazData.js";
import "./App.css";

//?======using map function==========

const App = () => {
  return (
    <div id="main-container">
      {productData.map((item) => {
        return (
          <ProductCards
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            // {...productData[item.id]}
          />
        );
      })}
    </div>
  );
};

export default App;

//?============Normal Method=======
// const product1 = {
//   image:
//     "https://static-01.daraz.com.np/p/9a5f85c067833bdf7a746142c5d68213.png_300x0q75.webp",
//   name: "Royal Blue Water Purifier| RO Purifier",
//   price: "10395",
// };

// const product2 = {
//   image:
//     "https://www.maketheswitch.ph/cdn/shop/products/43VidaaTransparent.png?v=1669004891",
//   name: "Samsung | Full HD | 55 inch",
//   price: 96000,
// };

// const App = () => {
//   return (
//     <div>
//       <ProductCards
//         image={product1.image}
//         name={product1.name}
//         price={product1.price}
//       />
//       <ProductCards {...product2} />

//       <ProductCards
//         image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxWzagIjgLT7VLC5_O36vHMP7z5GjcJoiGGgewClCAyQ&s"
//         name="LG Washing Machine | ThinQ AI | Power saving | Less water"
//         price={85000}
//       />
//     </div>
//   );
// };

// export default App;
