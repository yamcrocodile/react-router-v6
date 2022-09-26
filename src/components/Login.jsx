import React from "react";
import { Navigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [redirect, setRedirect] = React.useState(false);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    //fake username or password
    const fake = {
      username: "user",
      password: "pass"
    };

    //checking username or password
    if (username === fake.username && password === fake.password) {
      // storage fake token
      localStorage.setItem("token", true);
      // chage state 'true'
      setRedirect(true);
    } else {
      // set fake 'false' username and password wrong !
      localStorage.setItem("token", false);
    }
  };
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h3>Login</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="col-md-12">
              <label htmlFor="" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={handleUsername}
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="" className="form-label">
                Password
              </label>
              <input
                type="text"
                className="form-control"
                name="password"
                onChange={handlePassword}
              />
            </div>
            <div className="col-md-12 mt-4">
              <button className="btn btn-success" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>

      {redirect && <Navigate to="/admin/dashboard" />}
    </div>
  );
}
