import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../features/modal/modalSlice';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
  SidebarLogo
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  const [selected]=useState(false)
  const dispatch = useDispatch();
const order=()=>{
  toggle()
  dispatch(openModal())
}
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarLogo  src="zozo-sidebar.png"/>
      <SidebarMenu>
      
        <SidebarLink 
        to="zozo" 
        activeClass="active" 
        spy={true} 
        smooth={true}
        offset={-70}
        style={{cursor: 'pointer'}}
        selected={selected}
        onClick={toggle}
        >
         Zozo
         </SidebarLink>

        <SidebarLink 
        to='zozo-of-the-day'
        activeClass="active" 
        spy={true} 
        smooth={true}
        offset={-70}
        style={{cursor: 'pointer'}}
        selected={selected}
        onClick={toggle}
        >
        Zozo of the day
        </SidebarLink>

        <SidebarLink 
        to='zozo-cafe-comments'
        activeClass="active" 
        spy={true} 
        smooth={true}
        offset={-70}
        style={{cursor: 'pointer'}}
        selected={selected}
        onClick={toggle}
        >Comments</SidebarLink>

        </SidebarMenu>
        <SideBtnWrap>
        <SidebarRoute   onClick={order} >
        Order Now
        </SidebarRoute>

      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
