import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Customers() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchUser().then((res) => {
      setUser(res.data.data);
    });
  }, [user]);

  const fetchUser = async () => {
    let getData = await axios({
      url: "/api/users?page=1&delay=5",
      method: "get"
    });
    return getData;
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h1>Customer</h1>
        </div>
        <div className="card-body">
          <table className="table">
            <tbody>
              {user.map((res, index) => (
                <tr key={index}>
                  <td>
                    <img src={res.avatar} alt={res.id} />
                  </td>
                  <td>
                    <Link to={"ShowCustomer/" + res.id}>{res.first_name}</Link>
                  </td>
                  <td>{res.last_name}</td>
                  <td>{res.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
