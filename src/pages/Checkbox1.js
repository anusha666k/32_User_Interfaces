import React from "react";
import { Checkbox } from "antd";

function Checkbox1() {
  function onChange(checkedValues) {
    console.log("checked = ", checkedValues);
  }
  const plainOptions = ["Apple", "Pear", "Orange"];
  const options = [
    { label: "Apple", value: "Apple" },
    { label: "Pear", value: "Pear" },
  ];
  const optionsWithDisabled = [
    { label: "Orange", value: "Orange", disabled: false },
  ];
  return (
    <>
      <Checkbox.Group
        options={plainOptions}
        defaultValue={["Apple"]}
        onChange={onChange}
      />
      <br />
      <br />
      <Checkbox.Group
        options={options}
        defaultValue={["Pear"]}
        onChange={onChange}
      />
      <br />
      <br />
      <Checkbox.Group
        options={optionsWithDisabled}
        disabled
        defaultValue={["Apple"]}
        onChange={onChange}
      />
    </>
  );
}

export default Checkbox1;
