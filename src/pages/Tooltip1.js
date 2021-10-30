import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';

const Tooltip1 = (props) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <div>
      <p><span style={{textDecoration: "underline", color:"blue"}} href="#" id="TooltipExample"><br/>tooltip</span>.</p>
      <Tooltip placement="right" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>
       <h3> Hello react peoples!!</h3>
      </Tooltip>
    </div>
  );
}

export default Tooltip1;