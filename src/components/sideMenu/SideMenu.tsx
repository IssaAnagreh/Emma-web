import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import { COLORS } from "../../constants";

export default function SideMenu() {
  ////////////////////////////////////////////////////////////////
  // NOTE: this is not functional, this is only for a better UI //
  ////////////////////////////////////////////////////////////////
  return (
    <div className="sideMenu-container">
      <ProSidebar width="20vw" color={COLORS.primary}>
        {/* side menu title */}
        <SidebarHeader>
          <div className="sideMenu-title">Emma Systems</div>
        </SidebarHeader>
        {/* side menu items */}
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem>Answers List</MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter></SidebarFooter>
      </ProSidebar>
    </div>
  );
}
