import React from "react";
import {
  AiFillAccountBook,
  BsFillAlarmFill,
  BiAbacus,
  DiAndroid,
  FiActivity,
  FcAndroidOs,
} from "react-icons/all";

function Icon1() {
  return (
    <div>
      <h3 style={{ marginLeft: "-100px", color: "blue" }}> icons </h3>

      <div style={{ marginLeft: "650px" }}>
        {" "}
        <AiFillAccountBook /> &nbsp; <BsFillAlarmFill /> &nbsp; <BiAbacus />
        &nbsp; <DiAndroid />
        &nbsp; <FiActivity />
        &nbsp; <FcAndroidOs />
      </div>
    </div>
  );
}

export default Icon1;