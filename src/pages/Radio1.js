import React from "react";
import { Radio } from "antd";

function Radio1() {
  const [value, setValue] = React.useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div style={{ marginLeft: "600px" }}>
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={1}>1</Radio>&nbsp;<br/>
        <Radio value={2}>2</Radio>&nbsp;<br/>
        <Radio value={3}>3</Radio>&nbsp;<br/>
        <Radio value={4}>4</Radio>
      </Radio.Group>
    </div>
  );
}

export default Radio1;
