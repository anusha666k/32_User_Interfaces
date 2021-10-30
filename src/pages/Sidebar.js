import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

function Sidebar() {
  return (
    <div>
      <h3> Sidebar </h3>
      <div style={{ marginLeft: "666px" }}>
        <ProSidebar>
          <Menu iconShape="square">
            <MenuItem>Menu</MenuItem>
            <SubMenu title="Components">
              <MenuItem>Component 1</MenuItem>
              <MenuItem>Component 2</MenuItem>
            </SubMenu>
          </Menu>
        </ProSidebar>
      </div>
    </div>
  );
}

export default Sidebar;
