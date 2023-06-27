// CSS
import "./Navbar.css";
// packages
import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  BsSearch,
  BsHouseDoorFill,
  BsFillPersonFill,
  BsFillCameraFill,
} from "react-icons/bs";

const Navbar = () => {
  return (
    <nav id="nav">
      <Link to="/">
        React<span>Gram</span>
      </Link>
      <form>
        <BsSearch />
        <input type="text" />
      </form>
      <ul id="nav-links">
        <NavLink to="/">
          <BsHouseDoorFill />
        </NavLink>
        <NavLink to="/login">
          <span>Entrar</span>
        </NavLink>
        <NavLink to="/register">
          <span>Cadastrar</span>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
