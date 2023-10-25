import React from "react";
import logo from "../assets/logo.png"
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
const Header = () => {

  return(
    <>
      <Navbar className="my-2">
        <NavbarBrand href="/">
          <img
            alt="logo"
            src={logo}
            style={{
              height: 40,
              width: 200
            }}
          />
        </NavbarBrand>
        <Nav className="me-auto">
          <NavItem>
            <NavLink href="/aptindex">
              Available Oasis
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/aptnew">
              Add an Oasis
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>    
   </>
  )
}

export default Header