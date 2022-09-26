import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link
            className="nav-link active"
            aria-current="page"
            to="/admin/dashboard"
          >
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/customers">
            Customers
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/mail">
            Mail
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/logout">
            Logout
          </Link>
        </li>
      </ul>
    </>
  );
}
