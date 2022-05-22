import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Home</span>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
