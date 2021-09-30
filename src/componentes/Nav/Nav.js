import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = (props) => {
  const [searchValue, setSeachValue] = useState("");
  const inputValue = (e) => {
    setSeachValue(e.target.value);
    props.searchValuefun(searchValue);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  mb-5 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/home">
                <button className="btn">Home</button>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about">
                <button className="btn">About</button>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/producd-detaels">
                <button className="btn">ProductDeteals</button>
              </NavLink>
            </li>
          </ul>
          <div className="d-flex justify-content-center ">
            <input
              className="p-2  search-input"
              type="search"
              onChange={inputValue}
              placeholder="Search"
              aria-label="Search"
              width="200"
            />
          </div>
          <div className="ms-auto">
            <NavLink to="/admin">
              <button className="btn btn-danger">Login</button>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
