import React, { useState } from "react";
import "./style.css";
import Clender from "../../components/clender";

const Dashboard = () => {
  const [degree, setDegree] = useState(270);
  return (
    <div className="Container">
      <div className="left">
        <div className="ImageContainer">
          <img src="../../images/Logo.png" alt="" />
        </div>
      </div>
      <div className="middle"></div>
      <div className="right">
        <div className="user_info">
          <button onClick={() => setDegree((degree) => degree + 10)}>
            incr
          </button>
        </div>
        <div className="general">
          <div
            className="circle"
            style={{
              background: `conic-gradient(red 0deg ${degree}deg, transparent ${degree}deg 360deg)`,
            }}
          >
            <div className="second-circle">
              <div
                className="thi-circle"
                style={{
                  background: `conic-gradient(green 0deg ${
                    360 - degree
                  }deg, transparent ${360 - degree}deg 360deg)`,
                }}
              >
                <div className="inner-circle">
                  {Math.round((degree * 100) / 360)}%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clendar">
          <Clender />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
