import React from "react";
import styles from "./NavItems.module.css";
import NavItem from "./NavItem/NavItem";
// import { Navbar, Nav, NavDropdown } from "react-bootstrap";
const NavItems = props => {
  return (
    <ul className={styles.NavItems}>
      <NavItem link="/">Home</NavItem>
      <NavItem link="/about">About</NavItem>
      <NavItem link="/blog">Blog</NavItem>
      <NavItem link="/projects">Projects</NavItem>
      <NavItem link="/resume">Resume</NavItem>
      <NavItem link="/contact">Contact</NavItem>
    </ul>
  );
};

export default NavItems;
