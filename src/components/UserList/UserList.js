import React, { useState } from "react";

const UserList = (props) => {
  const userData = props.userData;

  return (
    <li key={userData.id}>
      {userData.userName} ({userData.userAge} years old)
    </li>
  );
};

export default UserList;
