import React from "react";
import Select from "react-select";

function Dropdown1() {
  const options = [
    { value: "pink", label: "Pink" },
    { value: "red", label: "Red" },
    { value: "green", label: "Green" },
  ];
  return (
    <div style={{ width: "550px", marginLeft: "520px" }}>
      <h3 style={{ color: "pink" }}></h3>
      <Select options={options} placeholder="Colors Dropdown" />
    </div>
  );
}
export default Dropdown1;
