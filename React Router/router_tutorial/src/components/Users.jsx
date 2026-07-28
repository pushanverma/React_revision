import React from "react";
import { Link, Outlet } from "react-router-dom";

const Users = () => {
  return (
    <>
      <div>
        <p>Users 1 </p>
        <p>Users 2 </p>
        <p>Users 3 </p>
      </div>
      <Outlet />
    </>
  );
};

export default Users;
