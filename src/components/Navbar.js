// Import React and Component base class so we can create a class-based component.
import React, { Component } from 'react';

// Navbar is a simple class component. Class components use `render()` to return JSX.
class Navbar extends Component {
  // The render method returns the JSX (what will be shown on screen).
  render() {
    return (

      // Use Bootstrap navbar classes for responsive navigation styling.
      // - `navbar`: base navbar styles
      // - `navbar-expand-lg`: expand the navbar on large screens
      // - `navbar-dark bg-dark`: dark background with light text
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
        <div className="container-fluid"> {/* container-fluid stretches full width */}
          {/* Brand / logo area - clicking goes to top (href="#") */}
          <a className="navbar-brand" href="#">Apna Cart</a>
        </div>
      </nav>
    );
  }
}

// Export the component so other files (like App.js) can import and use it.
export default Navbar;