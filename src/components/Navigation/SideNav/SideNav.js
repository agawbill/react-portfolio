import React from "react";
import Backdrop from "../../UI/Backdrop/Backdrop";
import ToggleButton from "../../UI/ToggleButton/ToggleButton";
import NavItems from "../NavItems/NavItems";
import SocialIcons from "../../UI/SocialIcons/SocialIcons";
import styles from "./SideNav.module.css";

const SideNav = props => {
  let classes = [styles.SideNav, styles.Close];
  if (props.open) {
    classes = [styles.SideNav, styles.Open];
  }
  return (
    <>
      <Backdrop open={props.open} closeDrawer={props.closeDrawer} />
      <div className={classes.join("  ")}>
        <nav>
          <NavItems />
          <SocialIcons size="1x" />
        </nav>
        <div className={styles.ToggleButton}>
          <ToggleButton open={props.open} toggleDrawer={props.closeDrawer} />
        </div>
      </div>
    </>
  );
};

export default SideNav;
