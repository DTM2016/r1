import React from "react";
import "./Rc1.css";

function Rc1(props) {
  const { name, country, age } = props;

  return (
    <div className="main">
      i ate <span className="name">{age}</span> yr old{" "}
      <span className="name">{name}</span>{" "}
      <span style={{ color: "brown", fontWeight: "bold" }}>shitty buthole</span>{" "}
      from <span className="name">{country}</span>;
      <br />
    </div>
  );
}
export default Rc1;
