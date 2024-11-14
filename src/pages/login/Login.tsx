import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";
import style from "./login.module.css";
import logo from "../../images/Logo.png";
import { error } from "console";

type LayoutType = Parameters<typeof Form>[0]["layout"];
type LoginProps = {
  handleSuccess: (isLogined: boolean) => void;
};

const Login = (props: LoginProps) => {
  const [form] = Form.useForm();
  // const [errorMessage, setErrorMessage] = useState("");

  const LoginRepuest = () => {};

  const handleLogin = (value: any) => {
    console.log(value.username);
    console.log(value.password);
    fetch("https://192.168.80.188:7251/api/Authenticate", {
      method: "POST",
      headers: {
        ContentType: "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: value.username,
        password: value.password,
        role: "1",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data == "Invalid credentials") {
          message.info("Incorrect username or password");
        } else {
          localStorage.setItem("token", data.token);
          props.handleSuccess(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="Container">
      <div className="left">
        <div className="form-container">
          <Form
            form={form}
            layout="vertical"
            onFinish={handleLogin}
            style={{ width: "100%" }}
          >
            <img src={logo} alt="logo" className="logo" />
            <Form.Item
              label="Tên đăng nhập *"
              name="username"
              rules={[
                { required: true, message: "Vui lòng nhập tên đăng nhập!" },
              ]}
            >
              <Input placeholder="Tên đăng nhập" className="input-field" />
            </Form.Item>
            <Form.Item
              label="Mật khẩu *"
              name="password"
              rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
            >
              <Input.Password placeholder="Mật khẩu" className="input-field" />
            </Form.Item>

            <Form.Item>
              <a className="forgot-password">Quên mật khẩu?</a>
            </Form.Item>
            <Form.Item className="button-container">
              <Button type="primary" htmlType="submit" className="login-button">
                Đăng nhập
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className="right">
        <img
          src="../../images/LoginRight.png"
          alt="Hệ thống quản lý xếp hàng"
          className="illustration"
        />
        <div className="system-text-container">
          <p className="system-text-title">Hệ thống</p>
          <p className="system-text-subtitle">QUẢN LÝ XẾP HÀNG</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
