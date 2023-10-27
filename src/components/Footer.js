import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

const Footer = ({user}) => {

  return(
    <>
      <Navbar className="my-2" fixed="bottom">
        <NavbarBrand to="/">
          &copy; Buoyant Duo Production 2023 | Lagoon Lounge
        </NavbarBrand>
        <Nav className="me-auto">
          {user && (
            <NavItem className="link-container">
              <NavLink to="/protectedindex">
                My Properties
              </NavLink>
            </NavItem>
          )}
          {!user && (
            <NavItem className="link-container">
              <NavLink to="/signup">
                Join Us
              </NavLink>
            </NavItem>
          )}
        </Nav>
      </Navbar>
    </>
  )
}

export default Footer