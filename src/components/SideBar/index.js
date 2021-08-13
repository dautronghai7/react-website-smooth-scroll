import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
  SideBtnWrap,
  SideBarRoute
} from "./SideBarElements";
const SideBar = ({toggle, isOpen}) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle} >
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink onClick={toggle} to="about">Abount</SideBarLink>
          <SideBarLink onClick={toggle} to="discover">Discover</SideBarLink>
          <SideBarLink onClick={toggle} to="services">Services</SideBarLink>
          <SideBarLink onClick={toggle} to="signup">Sign Up</SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
            <SideBarRoute to="/signin">Sign Ip</SideBarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
