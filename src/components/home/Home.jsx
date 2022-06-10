import React from "react";
import { Col, Row } from "antd";
import ImageSide from "../../pages/ImageSide";
import LoginForm from "../../pages/LoginForm";
const Home = () => {
  return (
    <div className="home">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={24} lg={10} xl={10} ><LoginForm /></Col>
        <Col xs={0} sm={0} md={0} lg={14} xl={14}  style={{ background: "#023047", width: "100%" }}><ImageSide /></Col>
      </Row>
    </div>
  );
};

export default Home;


