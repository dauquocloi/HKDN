import React, { useState, useEffect } from "react";
import "./style.css";
import Calendar from "../../components/calendar";

const Dashboard = () => {
  // Thiết bị
  const totalDevices = 4221;
  const activeDevices = 3779;
  const inactiveDevices = totalDevices - activeDevices;
  const [deviceDegree, setDeviceDegree] = useState(
    (activeDevices / totalDevices) * 360
  );

  // Dịch vụ
  const totalServices = 276;
  const activeServices = 210;
  const inactiveServices = totalServices - activeServices;
  const [serviceDegree, setServiceDegree] = useState(
    (activeServices / totalServices) * 360
  );

  // Cấp số
  const totalNumbers = 4221;
  const activeNumbers = 3621;
  const waitingNumbers = 468;
  const skippedNumbers = totalNumbers - activeNumbers - waitingNumbers;
  const [numberDegree, setNumberDegree] = useState(
    (activeNumbers / totalNumbers) * 360
  );
  const [numberDegree2, setNumberDegree2] = useState(
    (waitingNumbers / totalNumbers) * 360
  );

  useEffect(() => {
    setDeviceDegree((activeDevices / totalDevices) * 360);
    setServiceDegree((activeServices / totalServices) * 360);
    setNumberDegree((activeNumbers / totalNumbers) * 360);
  }, [
    activeDevices,
    totalDevices,
    activeServices,
    totalServices,
    activeNumbers,
    totalNumbers,
  ]);

  return (
    <div className="Container">
      <div className="left">
        <div className="ImageContainer">
          <img src="../../images/Logo.png" alt="" className="ImageLogo" />
        </div>
        <div className="Content-left">
          <div>
            <p>Dashboard</p>
          </div>
          <div>
            <p>Thiết bị</p>
          </div>
          <div>
            <p>Dịch vụ</p>
          </div>
          <div>
            <p>Cấp số</p>
          </div>
          <div>
            <p>Báo cáo</p>
          </div>
          <div>
            <p>Cài đặt hệ thống</p>
          </div>
        </div>
        <div className="end-left">
          <p className="Logout">Đăng xuất</p>
        </div>
      </div>
      <div className="middle"></div>
      <div className="right">
        <div className="user_info"></div>
        <div className="general">
          {/* Vòng tròn Thiết bị */}
          <div className="circle-container">
            <div
              className="circle"
              style={{
                background: `conic-gradient(red 0deg ${deviceDegree}deg, transparent ${deviceDegree}deg 360deg)`,
              }}
            >
              <div className="second-circle">
                <div
                  className="third-circle"
                  style={{
                    background: `conic-gradient(green 0deg ${
                      360 - deviceDegree
                    }deg, transparent ${360 - deviceDegree}deg 360deg)`,
                  }}
                >
                  <div className="inner-circle">
                    {Math.round((activeDevices * 100) / totalDevices)}%
                  </div>
                </div>
              </div>
            </div>
            <div className="statistics">
              <h1 className="quanlity">{totalDevices}</h1>
              <ul>
                <li>Đang hoạt động: {activeDevices}</li>
                <li>Ngừng hoạt động: {inactiveDevices}</li>
              </ul>
            </div>
          </div>

          {/* Vòng tròn Dịch vụ */}
          <div className="circle-container">
            <div
              className="circle"
              style={{
                background: `conic-gradient(blue 0deg ${serviceDegree}deg, transparent ${serviceDegree}deg 360deg)`,
              }}
            >
              <div className="second-circle">
                <div
                  className="third-circle"
                  style={{
                    background: `conic-gradient(green 0deg ${
                      360 - serviceDegree
                    }deg, transparent ${360 - serviceDegree}deg 360deg)`,
                  }}
                >
                  <div className="inner-circle">
                    {Math.round((activeServices * 100) / totalServices)}%
                  </div>
                </div>
              </div>
            </div>
            <div className="statistics">
              <h1 className="quanlity">{totalServices}</h1>
              <ul>
                <li>Đang hoạt động: {activeServices}</li>
                <li>Ngừng hoạt động: {inactiveServices}</li>
              </ul>
            </div>
          </div>

          {/* Vòng tròn Cấp số */}
          <div className="circle-container">
            <div
              className="circle"
              style={{
                background: `conic-gradient(green 0deg ${numberDegree}deg, transparent ${numberDegree}deg 360deg)`,
              }}
            >
              <div className="second-circle">
                <div
                  className="third-circle"
                  style={{
                    background: `conic-gradient(gray 0deg ${numberDegree2}deg, transparent ${numberDegree2}deg 360deg)`,
                  }}
                >
                  <div className="fourth-circle">
                    <div
                      className="fifth-circle"
                      style={{
                        background: `conic-gradient(red 0deg ${
                          360 - numberDegree - numberDegree2
                        }deg, transparent ${
                          360 - numberDegree - numberDegree2
                        }deg 360deg)`,
                      }}
                    >
                      <div className="inner-circle">
                        {Math.round((activeNumbers * 100) / totalNumbers)}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="statistics">
              <h1 className="quanlity">{totalNumbers}</h1>
              <ul>
                <li>Đã sử dụng: {activeNumbers}</li>
                <li>Đang chờ: {waitingNumbers}</li>
                <li>Bỏ qua: {skippedNumbers}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="calendar">
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
