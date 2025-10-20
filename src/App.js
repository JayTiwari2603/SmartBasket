// Import necessary things from React and other files
import React, { useState } from "react";  // Import React and useState hook for managing state
import logo from "./logo.svg";            // Import logo image
import "./App.css";                       // Import CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS for pre-made styles
import Navbar from "./components/Navbar";        // Import Navbar component
import ProductList from "./components/ProductList.js";  // Import ProductList component
import Footer from "./components/Footer.js";     // Import Footer component
import AddItem from "./components/AddItem";      // Import AddItem component

// Main App component function
function App() {
  // Initial products data - array of objects with product details
  const products = [
    {
      price: 99999,
      name: "IPhone 10S Max",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Redmi Note 10S Max",
      quantity: 0,
    },
  ];

  // Create state variables using useState hook
  // productList: stores all products, setProductList: function to update products
  let [productList, setProductList] = useState(products);
  // totalAmount: stores cart total, setTotalAmount: function to update total
  let [totalAmount, setTotalAmount] = useState(0);

  // Function to increase quantity of a product
  const incrementQuantity = (index) => {
    let newProductList = [...productList];  // Create copy of product list
    let newTotalAmount = totalAmount;       // Store current total
    newProductList[index].quantity++;       // Increase quantity by 1
    newTotalAmount += newProductList[index].price;  // Add price to total
    setTotalAmount(newTotalAmount);         // Update total amount
    setProductList(newProductList);         // Update product list
  };

  // Function to decrease quantity of a product
  const decrementQuantity = (index) => {
    let newProductList = [...productList];  // Create copy of product list
    let newTotalAmount = totalAmount;       // Store current total
    if (newProductList[index].quantity > 0) {  // Only decrease if quantity > 0
      newProductList[index].quantity--;        // Decrease quantity by 1
      newTotalAmount -= newProductList[index].price;  // Subtract price from total
    }
    setTotalAmount(newTotalAmount);         // Update total amount
    setProductList(newProductList);         // Update product list
  };

  // Function to reset all quantities to zero
  const resetQuantity = () => {
    let newProductList = [...productList];  // Create copy of product list
    newProductList.map((products) => {      // For each product
      products.quantity = 0;                // Set quantity to 0
    });
    setProductList(newProductList);         // Update product list
    setTotalAmount(0);                      // Reset total amount to 0
  };

  // Function to remove an item from cart
  const removeItem = (index) => {
    let newProductList = [...productList];  // Create copy of product list
    let newTotalAmount = totalAmount;       // Store current total
    // Subtract total price of removed item
    newTotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);        // Remove item from array
    setProductList(newProductList);         // Update product list
    setTotalAmount(newTotalAmount);         // Update total amount
  };

  // Function to add a new item to cart
  const addItem = (name, price) => {
    let newProductList = [...productList];  // Create copy of product list
    newProductList.push({                   // Add new product object
      price: price,
      name: name,
      quantity: 0,
    });
    setProductList(newProductList);         // Update product list
  };

  // Return JSX - what will be shown on screen
  return (
    <>  {/* Fragment - a way to group elements without adding extra div */}
      <Navbar />  {/* Show navigation bar at top */}
      <main className="container mt-5">  {/* Main content with Bootstrap styling */}
        <AddItem addItem={addItem} />  {/* Form to add new items */}
        <ProductList
          productList={productList}        // Pass product data
          incrementQuantity={incrementQuantity}  // Pass function to increase quantity
          decrementQuantity={decrementQuantity}  // Pass function to decrease quantity
          removeItem={removeItem}          // Pass function to remove items
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />  {/* Show total and reset button */}
    </>
  );
}

// Export the App component so it can be used in other files
export default App;
