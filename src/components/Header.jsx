import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

function Header() {
  return (
    <nav className="page-header">
      <NavLink to={"/glossary"}>Glossary</NavLink>
      <NavLink to={"/course"}>Course Page</NavLink>
      <NavLink to={"/lesson"}>Lesson Page</NavLink>
      <NavLink to={"/homework-tracker"}>Homework Tracker</NavLink>
    </nav>
  );
}

export default Header;
