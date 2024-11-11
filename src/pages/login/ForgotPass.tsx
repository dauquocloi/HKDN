import React from "react";
import "./forgotPass.css";
import logo from "../../images/Logo.png";

const ForgotPass = () => {
  return (
    <div className="Container">
      <div className="left">
        <div className="form-container">
          <img src={logo} alt="logo" className="logo" />
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
