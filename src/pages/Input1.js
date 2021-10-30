import React from "react";

function Input1() {
  return (
    <div>
   
      <label for="username" style={{ marginLeft: "700px" }}>
        Username:
      </label>
      <br />
      <input
        type="text"
        id="username"
        name="username"
        style={{ width: "280px", marginLeft: "600px" }}
      />
      <br />
    </div>
  );
}

export default Input1;