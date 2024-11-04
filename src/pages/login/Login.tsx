import React, { useState } from "react";
import { Button, Form, Input, Radio } from "antd";
import "./style.css";
import logo from "../../images/Logo.png";
type LayoutType = Parameters<typeof Form>[0]["layout"];

const Login: React.FC = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>("vertical");

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };

  return (
    <div className="Container">
      <div className="left">
        <Form
          layout={formLayout}
          form={form}
          initialValues={{ layout: formLayout }}
          onValuesChange={onFormLayoutChange}
          style={{ maxWidth: formLayout === "inline" ? "none" : 600 }}
        >
          <img src={logo} alt="logo" className="logo" />
          <Form.Item label="Tên đăng nhập (*)">
            <Input placeholder="Tên đăng nhập" />
          </Form.Item>
          <Form.Item label="Mật khẩu (*)">
            <Input placeholder="Mật khẩu" />
          </Form.Item>
          <Form.Item>
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </div>
      <div className="right">
        <img
          src="../../images/LoginRight.png"
          alt=""
          className="illustration"
        />
        <p></p>
      </div>
    </div>
  );
};

export default Login;
