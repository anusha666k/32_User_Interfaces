import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Notification1() {
  const notify = () => toast(<h5>"im the notification alert" </h5>);
  return (
    <div style={{ marginLeft: "700px" }}>
     
      <button  style={{ marginLeft: "-750px", color: "green" ,fontSize:"20px"}}onClick={notify}>Notification Modal!</button>
      <ToastContainer />
    </div>
  );
}

export default Notification1;
