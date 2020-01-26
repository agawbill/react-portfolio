import React, { useState } from "react";
import styles from "./Layout.module.css";
import Footer from "../../components/UI/Footer/Footer";
import NavBar from "../../components/Navigation/NavBar/NavBar";
import SideNav from "../../components/Navigation/SideNav/SideNav";
import { Container, Row, Col } from "react-bootstrap";

const Layout = props => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const drawerHandler = () => {
    setOpenDrawer(prevDrawer => !prevDrawer);
  };

  return (
    <div style={{ position: "relative" }}>
      <SideNav open={openDrawer} closeDrawer={drawerHandler} />
      <div className={styles.TopBar} />
      <div className={styles.NavBarContainer}>
        <NavBar open={openDrawer} toggleDrawer={drawerHandler} />
      </div>
      <div className={styles.container}>
        {props.children}
        {/* <Row
          style={{
            position: "absolute",
            bottom: "0px",
            width: "100%"
          }}
        >
          <Col>
            
          </Col>
        </Row> */}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
