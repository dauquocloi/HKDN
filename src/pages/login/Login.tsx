import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import "./login.css";
import logo from "../../images/Logo.png";

interface LoginProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<LoginProps> = ({ setIsLoggedIn }) => {
  const [form] = Form.useForm();
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (values: any) => {
    // Kiểm tra tên đăng nhập và mật khẩu
    if (values.username === "admin" && values.password === "admin") {
      setIsLoggedIn(true); // Cập nhật trạng thái đăng nhập thành công
    } else {
      setErrorMessage("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
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
            {errorMessage && <p className="error-message">{errorMessage}</p>}
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
