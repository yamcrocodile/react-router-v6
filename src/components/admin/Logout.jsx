import React from "react";
import { Navigate } from "react-router-dom";

export default function Logout() {
  const [status, setStatus] = React.useState(true);

  const logout = () => {
    localStorage.clear();

    console.log("clear");
    setStatus(false);
  };
  return (
    <div className="container">
      <h1>admin Logout </h1>
      <button onClick={logout}>go to homepage</button>
      {!status && <Navigate to="/login" />}
    </div>
  );
}
