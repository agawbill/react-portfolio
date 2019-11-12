import React, { useState } from "react";
import styles from "./Layout.module.css";
import Footer from "../../components/UI/Footer/Footer";
import NavBar from "../../components/Navigation/NavBar/NavBar";
import SideNav from "../../components/Navigation/SideNav/SideNav";
import { Container, Row, Col } from "react-bootstrap";

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
        <Row
          style={{
            position: "absolute",
            bottom: "0px",
            width: "100%",
            margin: "200px!important"
          }}
        >
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Layout;
