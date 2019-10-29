import React from "react";
import styles from "./NavItem.module.css";
import { NavLink } from "react-router-dom";

const NavItem = props => {
  return (
    <li className={styles.NavLink}>
      <NavLink
        onClick={props.close}
        exact
        to={props.link}
        activeClassName={styles.active}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavItem;
