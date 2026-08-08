import React, { useState } from "react";

const FirstandLastName = () => {
  let [data, setData] = useState({ first_name: "", last_name: "" });

  return (
    <div>
      <input
        type="text"
        placeholder="Enter firstName ..."
        onChange={(e) => setData({ ...data, first_name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Enter Lastname ..."
        onChange={(e) => setData({ ...data, last_name: e.target.value })}
      />

      <p>First Name is - {data.first_name}</p>
      <p>Last Name is - {data.last_name}</p>
      <p>My Full Name is - {data.first_name +" "+ data.last_name }</p>

      <p></p>
    </div>
  );
};

export default FirstandLastName;
