import React from "react";

export const Button = (props) => {
  return (
    <button title = {props.alt} onClick={props.fun}>
      <img src={props.src} alt={props.alt} />
    </button>
  );
};
