import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">
            Products
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            Contact US
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin">
            Administrator
          </Link>
        </li>
      </ul>
    </>
  );
}
