import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
const Footer = () => {

  return(
    <>
      <Navbar className="my-2" fixed="bottom">
        <NavbarBrand href="/">
          &copy; Cooladas Production 2023 | Lagoon Lounge
        </NavbarBrand>
        <Nav className="me-auto">
          <NavItem>
            <NavLink href="/protectedindex">
              My Properties
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/signup">
              Join Us
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  )
}

export default Footer