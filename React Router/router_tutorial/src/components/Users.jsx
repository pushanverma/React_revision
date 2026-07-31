import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { users } from "../constants/users";
import { useState } from "react";

const Users = () => {
  // user list
  const [userlist, setUserList] = useState(users);
  //user status
  const [userfilter, setUserFilter] = useState("");

  const [searchParams, setsearchParams] = useSearchParams();

  console.log(searchParams.get("filter"), "...searchParams");

  useEffect(() => {
    if (searchParams.get("filter") === "active") {
      setUserFilter("active");
      console.log(userlist, "...userlist");
      let activeUsers = userlist.filter((user) => user.userStatus == "active");
      setUserList(activeUsers);
    } else if (searchParams.get("filter") === "inactive") {
      setUserFilter("inactive");
      let inactiveUsers = userlist.filter(
        (user) => user.userStatus == "inactive",
      );
      setUserList(inactiveUsers);
    } else {
      setUserFilter(null);
      setUserList(users);
    }
  }, [searchParams]);

  return (
    <>
      <div>
        <p>Users 1 </p>
        <p>Users 2 </p>
        <p>Users 3 </p>
      </div>

      <div>
        <button onClick={() => setsearchParams({ filter: "active" })}>
          {" "}
          Active User{" "}
        </button>
        <button onClick={() => setsearchParams({ filter: "inactive" })}>
          {" "}
          InActive User{" "}
        </button>
        <button onClick={() => setsearchParams()}> Reset Filter </button>
      </div>

      {/* {userfilter == "active" ? (
        <h1>Active Users </h1>
      ) : userfilter == "inactive" ? (
        <h1>Inactive User</h1>
      ) : (
        <h1>All the users</h1>
      )} */}

      {console.log(userfilter, ".....userFilter")}

      {userfilter === "active" && <h1>Active User </h1>}

      {userfilter === "inactive" && <h1>InActive User </h1>}

      {userfilter === null && <h1>All Users </h1>}

      {console.log(userlist, "....map")}

      {userlist?.map((user, index) => {
        return (
          <>
            {console.log(user, "...user in user list ")}
            <h3 key={index}>{user.userName}</h3>
          </>
        );
      })}

      <Outlet />
    </>
  );
};

export default Users;
