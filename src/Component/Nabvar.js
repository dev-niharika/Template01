import React from "react";
import { Link } from "react-router-dom";
import '../style/navbar.css'

function Navbar() {

  return (
    <>
      {/* Sidenav */}
      <nav>
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about" >About</Link>
            </li>
            <li>
              <Link to="/contact" >Contact</Link>
            </li>
            <li>
              <Link to="/support" >Support</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar;