import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="About" onClick={toggle}>About</SidebarLink>
                <SidebarLink to="Discover" onClick={toggle}>Discover</SidebarLink>
                <SidebarLink to="Services" onClick={toggle}>Services</SidebarLink>
                <SidebarLink to="SignUp" onClick={toggle}>SignUp</SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
        <SideBtnWrap>
            <SidebarRoute to='/signin'>Sign In</SidebarRoute>
        </SideBtnWrap>
    </SidebarContainer>
  )
}

export default Sidebar
