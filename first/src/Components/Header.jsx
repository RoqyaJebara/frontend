import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-white shadow-sm px-4 py-3">
      <a className="navbar-brand fw-bold fs-4" href="#">Inter.</a>
      <div>
        <a href="#" className="me-3 text-dark fw-bold">Courses</a>
        <a href="#" className="me-3 text-dark fw-bold">About</a>
        <a href="#" className="me-3 text-dark fw-bold">Pricing</a>
        <a href="#" className="btn btn-outline-dark fw-bold">Login</a>
      </div>
    </nav>
  );
};

export default Header;
