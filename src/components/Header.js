import React from "react";
import logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

const Header = ({user, logout}) => {
  // console.log("on header: ", user)
  const navigate = useNavigate()

  const handleClick = () => {
    logout()
    navigate("/")
  }

  const handleLogIn = () => {
    navigate("/signin")
  }
  return(
    <>
      <Navbar className="my-2">
        <NavbarBrand>
          <NavLink to="/">
            <img
              alt="logo"
              src={logo}
              style={{
                height: 40,
                width: 200
              }}
            />
          </NavLink>
        </NavbarBrand>
        <Nav>
          <NavItem className="link-container">
            <NavLink to="/aptindex">
              Available Oasis
            </NavLink>
          </NavItem>

          {user && (
            <>
              <NavItem className="link-container">
                <NavLink to="/aptnew">
                  Add an Oasis
                </NavLink>
              </NavItem>
              <NavItem className="link-container">
                <input 
                  type="button" 
                  value="Log out" 
                  onClick={handleClick}
                />
              </NavItem>
            </>
          )}

          {!user && (
            <>
              <NavItem className="link-container">
                <input type="button" value="Log in" onClick={handleLogIn}/>
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