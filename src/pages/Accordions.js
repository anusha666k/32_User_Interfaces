import React from "react";
import { Collapse } from "antd";

const Accordions = () => {
    const { Panel } = Collapse;
  const text = `
Hi.
 Hello,
How r u.
`;
  return (
    <Collapse accordion>
      <Panel header="This is panel header 1" key="1">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 2" key="2">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 3" key="3">
        <p>{text}</p>
      </Panel>
    </Collapse>
  );
};

export default Accordions;
