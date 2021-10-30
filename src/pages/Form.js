import React, { useState } from "react";
import useInput from "./useInput";

function Form() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");

  const [firstName, bindFirstName, resetFirstName] = useInput('');
  const [lastName, bindLastName, resetLastName] = useInput('');

  const submitvalues = (e) => {
    e.preventDefault();
    alert("hello ${firsName} ${lastName}");
    resetFirstName()
    resetLastName()
  };
  return (
    <div>
      <Form onSubmit={submitvalues}>
        <div>
          <label>First Name</label>
          <input
           
          {...bindFirstName}
            type="text"
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            // value={lastName}
            // onchange={(e) => setLastName(e.target.value)}
            {...bindLastName}
            type="text"
          />
        </div>
        <button>Submit</button>
      </Form>
    </div>
  );
}

export default Form;
