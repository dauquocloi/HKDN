import React, { useState } from "react";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import ForgotPass from "./pages/login/ForgotPass";
import ResetPass from "./pages/login/ResetPass";

function App() {
  // const [isLogined, setIsLogined] = useState(false);
  // const receiveLogin = (isLogined: boolean) => {
  //   setIsLogined(isLogined);
  // };

  return (
    // <div>
    //   {!isLogined ? <Login handleSuccess={receiveLogin} /> : <Dashboard />}
    // </div>
    <ResetPass />
    // <Dashboard />
    // <ForgotPass />
  );
}

export default App;
