import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Typography,
  message,
} from "antd";
import axios from "axios";

const url = "https://reqres.in/api/login";

const { Title } = Typography;

const LoginForm = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const onFinesh = (event) => {
    // event.preventDefault()
    console.log(input);
    axios
      .post(url, input)
      .then((response) => {
        message.success("Login Success", 2);
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
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinesh}
        >
          <Form.Item name="email">
            <Input
              placeholder="Email Address"
              value={input.email}
              onChange={(e) => setInput({ ...input, email: e.target.value })}
            />
          </Form.Item>
          <Form.Item name="password">
            <Input
              type="password"
              placeholder="Password"
              value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
          </Form.Item>
          <Form.Item>
            <Button
              block
              type="primary"
              htmlType="submit"
              style={{ backgroundColor: "#023047", height: "2.5rem" }}
            >
              Login
            </Button>
          </Form.Item>
          <Form.Item>
            <div className="loginFormDownSide">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="#" style={{ color: "#023047"}}>
                Forgot password ?
              </a>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;

