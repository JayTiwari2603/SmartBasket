import React from "react";

// AddItem is a small form component (class-based) that lets the user add a new product.
// It keeps the input values in its own state and calls `this.props.addItem(name, price)`
// when the form is submitted. The parent component (App) provides that addItem function.
class AddItem extends React.Component {
  constructor(props) {
    super(props);
    // Local state to store the current input values (controlled inputs)
    this.state = {
      productName: "", // the product name typed by the user
      productPrice: 0,   // the product price typed by the user
    };
  }

  render() {
    return (
      // onSubmit prevents default page reload and calls parent's addItem
      <form
        className="row mb-5"
        onSubmit={(e) => {
          e.preventDefault();
          // Call addItem from props (App) with current state values
          // Number(...) ensures price is a number and not a string
          this.props.addItem(this.state.productName, Number(this.state.productPrice));
          // Optionally, you could clear the inputs here by resetting state
          this.setState({ productName: "", productPrice: 0 });
        }}
      >
        {/* Product name input (controlled component) */}
        <div className="mb-3 col-4">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="name"
            name="productName"
            // Update component state when user types (controlled input)
            onChange={(e) => {
              this.setState({ productName: e.currentTarget.value });
            }}
            // Value comes from state so React controls the input
            value={this.state.productName}
          />
        </div>

        {/* Product price input */}
        <div className="mb-3 col-4">
          <label htmlFor="inputPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="productPrice"
            onChange={(e) => {
              // Keep price in state (as string until we convert on submit)
              this.setState({ productPrice: e.currentTarget.value });
            }}
            value={this.state.productPrice}
          />
        </div>

        {/* Submit button */}
        <button type="submit" className="btn btn-primary col-4">
          Add
        </button>
      </form>
    );
  }
}

export default AddItem;
