import React, { useState } from "react";
import style from "./Arr.module.css";
import UserList from "../UserList/UserList";
import Alerts from "../Alerts/Alerts";

const Arr = (props) => {
  const userList = props.userList;

  // if (userList.length === 0 || userList.userAge < 0) {
  //   return (
  //     <Alerts
  //       alertdescription={
  //         "Please enter a valid Name and Age (non-empty values)"
  //       }
  //       alerthead={"Invalid input"}
  //     />
  //   );
  // }

  return (
    <div className={style.array}>
      {userList.length > 0 ? (
        <ul>
          {userList.map((user) => (
            <UserList userData={user} key={user.id} />
          ))}
        </ul>
      ) : (
        <p>Add a new user</p>
      )}
    </div>
  );
};

export default Arr;
