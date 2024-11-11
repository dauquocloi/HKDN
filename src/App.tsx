import React, { useState } from "react";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import ForgotPass from "./pages/login/ForgotPass";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    // <div>
    //   {isLoggedIn ? <Dashboard /> : <Login setIsLoggedIn={setIsLoggedIn} />}
    // </div>
    // <Dashboard />
    <ForgotPass />
  );
}

export default App;
