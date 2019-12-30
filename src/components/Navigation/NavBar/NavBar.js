import React from "react";
import styles from "./NavBar.module.css";
import NavBanner from "../NavBanner/NavBanner";
import NavItems from "../NavItems/NavItems";
import SocialIcons from "../../UI/SocialIcons/SocialIcons";
import ToggleButton from "../../UI/Buttons/ToggleButton/ToggleButton";
import { Container, Row, Col } from "react-bootstrap";

const NavBar = props => {
  return (
    <Container className={styles.NavBarContainer}>
      <header className={styles.NavBar}>
        <NavBanner />
        <nav className={styles.DesktopLinks}>
          <NavItems />
        </nav>
        <div className={styles.SocialIcons}>
          <SocialIcons size="2x" />
        </div>
        <div className={styles.ToggleButton}>
          <ToggleButton open={props.open} toggleDrawer={props.toggleDrawer} />
        </div>
      </header>
    </Container>
  );
};

export default NavBar;
