// Import React so JSX compiles correctly
import React from "react";

// Product component: shows a single product row inside the product list.
// It receives `props` from the parent (ProductList / App).
// Expected props:
// - props.product: object with { name, price, quantity }
// - props.index: index of this product in the array (used for updates)
// - props.incrementQuantity: function to increase quantity
// - props.decrementQuantity: function to decrease quantity
// - props.removeItem: function to remove this product
export default function Product(props) {
  return (
    // Use Bootstrap grid to layout product row
    <div className="row mt-3">
      {/* Product name and price */}
      <div className="col-5">
        <h2>
          {props.product.name} {/* Show product name */}
          <span className="badge bg-secondary ms-2">₹{props.product.price}</span> {/* Price badge */}
        </h2>
      </div>

      {/* Quantity controls: -, quantity, + */}
      <div className="col-3">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          {/* Decrease quantity button */}
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              // Call parent function with this product's index
              props.decrementQuantity(props.index);
            }}
          >
            -
          </button>

          {/* Display current quantity. Use className (not class) in React JSX. */}
          <button type="button" className="btn btn-warning">
            {props.product.quantity}
          </button>

          {/* Increase quantity button */}
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              // Call parent function to increase quantity
              props.incrementQuantity(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>

      {/* Show total price for this product (quantity * price) */}
      <div className="col-2">{props.product.quantity * props.product.price}</div>

      {/* Remove button to delete this item from cart */}
      <button
        className="col-2 btn btn-danger"
        onClick={() => {
          props.removeItem(props.index); // Tell parent to remove this item
        }}
      >
        Remove
      </button>
    </div>
  );
}
