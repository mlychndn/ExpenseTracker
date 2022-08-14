import "./Card.css";
import React from "react";
const Card = (props) => {
  //console.log("className", props);
  let classProps = `expense ${props.className}`;

  return <div className={classProps}>{props.children}</div>;
};

export default Card;
