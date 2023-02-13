import React from "react";
import "../css/main.css";
import SideNav, {
  // Toggle,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import * as Icon from "react-bootstrap-icons";

const SideNavigator = () => {
  return (
    <SideNav
      onSelect={(selected) => {
        console.log(selected);
      }}
      className="bg-dark text-white"
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
        <NavItem>
          <NavIcon>
            <Icon.HouseDoorFill color="white" size="18" />
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>

        <NavItem>
          <NavIcon>
            <Icon.File color="white" size="18" />
          </NavIcon>
          <NavText>Documents</NavText>
        </NavItem>

        <NavItem>
          <NavIcon>
            <Icon.PeopleFill color="white" size="18" />
          </NavIcon>
          <NavText>Community</NavText>
        </NavItem>

        <NavItem>
          <NavIcon>
            <Icon.PrinterFill color="white" size="18" />
          </NavIcon>
          <NavText>Results</NavText>
        </NavItem>

        <NavItem>
          <NavIcon>
            <Icon.Microsoft color="white" size="18" />
          </NavIcon>
          <NavText>Teams</NavText>
        </NavItem>

        <NavItem>
          <NavIcon>
            <Icon.BoxArrowRight color="white" size="18" />
          </NavIcon>
          <NavText>Folders</NavText>
        </NavItem>

        <NavItem>
          <NavIcon>
            <Icon.SignMergeRightFill color="white" size="18" />
          </NavIcon>
          <NavText>Dependencies</NavText>
        </NavItem>

        <NavItem>
          <NavIcon>
            <Icon.Download color="white" size="18" />
          </NavIcon>
          <NavText>Download</NavText>
        </NavItem>

        <NavItem>
          <NavIcon>
            <Icon.BoxArrowInRight color="white" size="18" />
          </NavIcon>
          <NavText>Exit</NavText>
        </NavItem>

        <NavItem>
          <NavIcon>
            <Icon.ChatLeftFill color="white" size="18" />
          </NavIcon>
          <NavText>Message</NavText>
        </NavItem>

        <NavItem>
          <NavIcon>
            <Icon.StopwatchFill color="white" size="18" />
          </NavIcon>
          <NavText>World Clock</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
};

export default SideNavigator;
