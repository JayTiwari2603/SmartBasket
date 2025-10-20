// Import React so we can use JSX and React features in this file.
import React from "react";

// Import the Product component. Product is a small component that shows one product row.
import Product from "./Product.js";

// ProductList is a function component that receives `props` from its parent (App.js).
// `props` is an object that contains values and functions passed down by the parent.
export default function ProductList(props) {
  // The component returns JSX (HTML-like code) which React will render.
  return (
    // A Bootstrap container to add some spacing and center the content.
    <div className="container mt-3">
      {/*
        Conditional rendering:
        - If `props.productList.length > 0` is true (there are products) we show the list.
        - Otherwise we show a message "No Products Exists in the Cart".
      */}
      {props.productList.length > 0 ? (
        // Map over the product list array and create a <Product /> for each item.
        // `map` converts an array of data into an array of React elements.
        props.productList.map((product, i) => (
          // For each product we render the Product component and pass these props:
          // - product: the product object (price, name, quantity)
          // - key: a unique identifier for React's list rendering (use the index here)
          // - incrementQuantity, decrementQuantity, removeItem: functions passed from App
          <Product
            product={product}
            key={i}
            incrementQuantity={props.incrementQuantity}
            index={i}
            decrementQuantity={props.decrementQuantity}
            removeItem={props.removeItem}
          />
        ))
      ) : (
        // If the product list is empty, show this message so the user knows the cart is empty.
        <h1>No Products Exists in the Cart</h1>
      )}
    </div>
  );
}
