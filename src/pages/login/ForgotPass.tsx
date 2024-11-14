import React from "react";
import "./forgotPass.css";
import logo from "../../images/Logo.png";
import { Button, Form, Input, message } from "antd";

const ForgotPass = () => {
  return (
    <div className="Container">
      <div className="left">
        <div className="form-container">
          <img src={logo} alt="logo" className="logo" />
          <Form.Item></Form.Item>
          <h1>Đặt lại mật khẩu</h1>
          <Form.Item label="Vui lòng nhập email để đặt lại mật khẩu của bạn (*)">
            <Input placeholder="Tên đăng nhập" className="input-field" />
          </Form.Item>
          <Form.Item className="button-container">
            <Button type="primary" htmlType="submit" className="cancel-button">
              Hủy
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              className="continue-button"
            >
              Tiếp tục
            </Button>
          </Form.Item>
        </div>
      </div>
      <div className="right">
        <img
          src="../../images/Frame.png"
          alt="Hệ thống quản lý xếp hàng"
          className="illustration"
        />
      </div>
    </div>
  );
};

export default ForgotPass;
