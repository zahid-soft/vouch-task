import React from "react";
import Buttons from "../button/Button";
import { Col, Row } from "antd";

const Navbar = () => {
  return (
    <div className="navbar">
      <Row gutter={[8, 16]}>
        <Col span={16} style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
          ATools<span style={{ color: "orange" }}>.</span>
        </Col>
        <Col span={8}>
          <div className="navbarButton">
            <Row gutter={[8, 16]} >
              <Col  xs={0} sm={0} md={0} lg={14} xl={2} xxl={2} >
                <Buttons color={"#023047"} text={"Start Free Trial"} />
              </Col>
              <Col xs={0} sm={0} md={0} lg={14} xl={2} xxl={2} >
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


