import React, { useState } from "react";
import style from "./Mainform.module.css";
import Button from "../Button/Button";
import Arr from "../Arr/Arr";
import Alerts from "../Alerts/Alerts";

// add unique key, alerts, if no user data show text "Add a new users"

const Mainform = () => {
  const [userNameInput, changeUsernameInput] = useState("");
  const [userAgeInput, changeUserAgeInput] = useState("");
  const [userList, setUserList] = useState([]);
  const [error, setError] = useState();

  const nameChanger = (e) => {
    changeUsernameInput(e.target.value);
  };

  const ageChanger = (e) => {
    changeUserAgeInput(e.target.value);
  };

  const sendToList = (e) => {
    const userData = {
      id: Math.random().toString(),
      userAge: userAgeInput,
      userName: userNameInput,
    };
    e.preventDefault();
    if (userNameInput.trim().length === 0 || userAgeInput.trim().length === 0) {
      setError({
        alerthead: "Invalid input",
        alertdescription:
          "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+userAgeInput < 1) {
      setError({
        alerthead: "Invalid age",
        alertdescription:
          "Please enter valid age that > 0.",
      });
      return;
    }
    setUserList([...userList, userData]);
    changeUsernameInput("");
    changeUserAgeInput("");
  };

  const errorHandler=()=>{
    setError(null);
  }

  return (
    <div>
      {error && (
        <Alerts
          alerthead={error.alerthead}
          alertdescription={error.alertdescription}
          setErrorNull={errorHandler}
        />
      )}
      <form style={style.form} onSubmit={sendToList}>
        <div className={style.formhandler}>
          <label htmlFor="name">Username</label>
          <input
            type="text"
            id="name"
            onChange={nameChanger}
            value={userNameInput}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            onChange={ageChanger}
            value={userAgeInput}
          />
          <Button>Add user</Button>
        </div>
      </form>
      <Arr userList={userList}></Arr>
    </div>
  );
};

export default Mainform;
