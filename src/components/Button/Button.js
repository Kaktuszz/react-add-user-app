import React from "react";
import style from "./Button.module.css";

const Button =(props)=>{

    // const buttonTitle = props.buttonTitle;
    const onClick = props.onClick;


    return(
        <button style={style} onClick={onClick}>{props.children}</button>
    );
}

export default Button;