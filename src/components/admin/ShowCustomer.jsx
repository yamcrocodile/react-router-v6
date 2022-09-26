import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ShowCustomer() {
  const params = useParams();
  const [user, setUser] = useState({});

  const fetchData = async () => {
    const data = await axios({
      url: "api/users/",
      method: "get",
      params: { id: params.id }
    });
    return data.data.data;
  };
  useEffect(() => {
    const fetc = () => {
      fetchData().then((res) => {
        setUser(res);
      });
    };
    return fetc;
  });
  return (
    <>
      <h1>Show customer</h1>
      <img src={user.avatar} alt="" />
      <h1>{user.email}</h1>
    </>
  );
}
