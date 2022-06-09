import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Col, Row, Typography,message } from "antd";
import axios from "axios";

const url = "https://reqres.in/api/login";

const { Title } = Typography;

const LoginForm = () => {

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const onFinesh = event => {
    // event.preventDefault()
    console.log(input);
    axios
      .post(url, input)
      .then((response) => {
        message.success('Login Success',2);
      })
      .catch((error) => {
        message.error(error.response.data.error);
      });
  };

  return (
    <div className="loginForm">
      <div className="loginFormHeading">
        <Title
          style={{
            fontWeight: "bold",
            fontSize: "2rem",
            marginBottom: "0px",
            paddingBottom: "0px",
            color: "00171F",
          }}
        >
          Welcome Back
        </Title>
        <p style={{ color: "#798488" }}>sub-title text goes here</p>
      </div>
      <div className="loginFormFields">
        <Form onFinish={onFinesh}>
          <Form.Item name="Email Address">
            <Input
              required
              placeholder="Email Address"
              style={{ height: "2.5rem" }}
              value={input.email}
              onChange={(e) => setInput({ ...input, email: e.target.value })}
            ></Input>
          </Form.Item>
          <Form.Item name="Password">
            <Input.Password
              placeholder="Password"
              style={{ height: "2.5rem" }}
              value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
          </Form.Item>
          <Form.Item style={{ height: "1.2rem" }}>
            <Button
              block
              type="primary"
              htmlType="submit"
              style={{ backgroundColor: "#023047", height: "2.5rem" }}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
        <Row style={{ margin: "0px" }}>
          <Col span={12}>
            <Checkbox checked="true">Remember Password</Checkbox>
          </Col>
          <Col span={12}>
            <Button type="link" htmlType="button" style={{ color: "#023047" }}>
              Forget Password ?
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LoginForm;
