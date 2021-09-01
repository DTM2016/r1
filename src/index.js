import React from "react";
import ReactDom from "react-dom";
import Rc1 from "./Rc1";
import X from "./X";

let dom = document.querySelector("#root");

ReactDom.render(
  <div>
    <X />
    <br />
    <hr />
    dtm - React 101
    <hr />
    <Rc1 name="carla" age="53" country="usa" />
    <Rc1 name="io" age="29" country="ghana" />
    <Rc1 name="julie" age="51" country="cameroon" />
    <Rc1 name="DANA" age="49" country="KOREA" />
  </div>,
  dom
);
