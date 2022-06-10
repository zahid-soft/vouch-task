import React from "react";
import Buttons from "../button/Button";
import { Col, Row } from "antd";

const Navbar = () => {
  return (
    <div className="navbar">
      <Row gutter={[8, 16]}>
        <Col xs={6} sm={6} md={6} lg={16} xl={16} xxl={18} style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
          ATools<span style={{ color: "orange" }}>.</span>
        </Col>
        <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={6}>
          <div className="navbarButton">
            <Row gutter={[8, 16]} >
              <Col  xs={0} sm={0} md={0} lg={13} xl={12} xxl={12} >
                <Buttons color={"#023047"} text={"Start Free Trial"} />
              </Col>
              <Col xs={0} sm={0} md={0} lg={4} xl={2} xxl={2} >
                <Buttons color={"#FB8500"} text={"Login"}  />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Navbar;


