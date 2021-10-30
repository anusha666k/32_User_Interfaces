import React from "react";
import { Breadcrumb } from "antd";

function Breadcrumb1() {
  return (
      <div>
      <h1></h1>
    <Breadcrumb>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">Application Center</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">Application List</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>An Application</Breadcrumb.Item>
    </Breadcrumb>
    </div>
  );
}

export default Breadcrumb1;
