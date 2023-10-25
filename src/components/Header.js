import React from "react";
import logo from "../assets/logo.png"
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
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
          {user && (
            <>
              <NavItem>
                <input type="button" value="Log out"/>
              </NavItem>
            </>
          )}

          {!user && (
            <>
              <NavItem>
                <input type="button" value="Log in"/>
              </NavItem>
              <NavItem>
                <NavLink href="/signup">
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