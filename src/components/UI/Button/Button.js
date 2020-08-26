import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <button
      className={props.white ? "Button Button--white" : "Button Button--dark"}
    >
      {props.children}
    </button>
  );
};

export default Button;
