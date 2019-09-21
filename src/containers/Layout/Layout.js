import React, { useState } from "react";
// import banner from "../../images/banner2.jpeg";
// import portfoliophoto from "../../images/portfoliophoto.JPG";
import styles from "./Layout.module.css";
import NavBar from "../../components/Navigation/NavBar/NavBar";
// import About from "../../components/About/About";
import SideNav from "../../components/Navigation/SideNav/SideNav";
import { Container } from "react-bootstrap";

const Layout = props => {
  let [openDrawer, setOpenDrawer] = useState(false);

  const drawerHandler = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <>
      <SideNav open={openDrawer} closeDrawer={drawerHandler} />
      <Container className={styles.container}>
        <div className={styles.TopBar} />
        <NavBar open={openDrawer} toggleDrawer={drawerHandler} />
        {props.children}
      </Container>
    </>
  );
};

export default Layout;
