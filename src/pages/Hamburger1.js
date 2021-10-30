import React, { useState } from "react";
import Hamburger from "hamburger-react";

function Hamburger1() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
  
      <div style={{ marginLeft: "750px" }}>
        <Hamburger toggled={isOpen} toggle={setOpen} style={{ color: "red" }} />
      </div>
    </div>
  );
}



export default Hamburger1;
