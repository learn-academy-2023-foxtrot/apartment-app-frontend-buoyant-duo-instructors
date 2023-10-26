import React from "react";
import logo from "../assets/logo.png"
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

const Header = ({user}) => {
  // console.log("on header: ", user)

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
        <Nav>
          <NavItem className="link-container">
            <NavLink to="/aptindex">
              Available Oasis
            </NavLink>
          </NavItem>
          <NavItem className="link-container">
            <NavLink to="/aptnew">
              Add an Oasis
            </NavLink>
          </NavItem>

          {user && (
            <>
              <NavItem className="link-container">
                <input type="button" value="Log out"/>
              </NavItem>
            </>
          )}

          {!user && (
            <>
              <NavItem className="link-container">
                <input type="button" value="Log in"/>
              </NavItem>
              <NavItem className="link-container">
                <NavLink to="/signup">
                  Sign Up
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Navbar>    
   </>
  )
}

export default Header