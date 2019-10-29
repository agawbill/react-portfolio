import React from "react";
import styles from "./NavItems.module.css";
import NavItem from "./NavItem/NavItem";
// import { Navbar, Nav, NavDropdown } from "react-bootstrap";
const NavItems = props => {
  return (
    <ul className={styles.NavItems}>
      <NavItem close={props.close} link="/">
        Home
      </NavItem>
      <NavItem close={props.close} link="/about">
        About
      </NavItem>
      <NavItem close={props.close} link="/blog">
        Blog
      </NavItem>
      <NavItem close={props.close} link="/projects">
        Projects
      </NavItem>
      <NavItem close={props.close} link="/resume">
        Resume
      </NavItem>
      <NavItem close={props.close} link="/contact">
        Contact
      </NavItem>
    </ul>
  );
};

export default NavItems;
