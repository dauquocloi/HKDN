import React from "react";
import "./reset-pass.css";
import logo from "../../images/Logo.png";
import frame from "../../images/Frame.png"; // Import thêm ảnh Frame.png
import { Button, Form, Input, message } from "antd";

const ResetPass = () => {
  return (
    <div className="Container">
      <div className="left">
        <div className="form-container">
          <Form layout="vertical" style={{ width: "100%" }}>
            <img src={logo} alt="logo" className="logo" />
            <Form.Item></Form.Item>
            <h1>Đặt lại mật khẩu mới</h1>
            <Form.Item
              label="Mật khẩu"
              name="password"
              rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
            >
              <Input.Password placeholder="Mật khẩu" className="input-field" />
            </Form.Item>
            <Form.Item
              label="Nhập lại mật khẩu"
              name="password"
              rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
            >
              <Input.Password
                placeholder="Nhập lại mật khẩu"
                className="input-field"
              />
            </Form.Item>
            <Form.Item className="button-container">
              <Button
                type="primary"
                htmlType="submit"
                className="confirm-button"
              >
                Xác nhận
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className="right">
        <img
          src={frame} // Sử dụng biến đã import
          alt="Hệ thống quản lý xếp hàng"
          className="illustration"
        />
      </div>
    </div>
  );
};

export default ResetPass;
