import React from "react";
import style from "./Alerts.module.css";
import Button from "../Button/Button";

const Alerts = (props) => {
  const alertdescription = props.alertdescription;
  const alerthead = props.alerthead;
  const setErrorNull = props.setErrorNull;

  return (
    <div className={style.backshadow} onClick={setErrorNull}>
      <div className={style.alertstyle}>
        <div className={style.alertdesc}>
          <h1>{alerthead}</h1>
        </div>
        <p>{alertdescription}</p>
        <Button onClick={setErrorNull}>Okay</Button>
      </div>
    </div>
  );
};

export default Alerts;
