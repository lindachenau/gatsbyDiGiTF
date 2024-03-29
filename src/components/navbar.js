import React, { useState } from "react"
import {
  MDBContainer, MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, 
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact"
import { Link, navigate } from 'gatsby'
import CustomNavLink from './custom-link'
import Logo from "../../static/DiGiTF_128.png"
import './navbar.css'
import {dropdownMenu, dropdownItem} from  './navbar.module.scss'
import { isLoggedIn, isAdmin, logout } from './app-user'
// import GDriveInit from './gdrive-ini'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }    
  
  const signout = () => {
    logout()
    navigate("/")
  }

  return (
    <MDBNavbar dark expand="md" id="navbar">
      <MDBContainer>
        <Link className="waves-effect waves-light" to='/' style={{display: 'flex', alignItems: 'center'}}>
          <img width={40} src={Logo} className="mr-3" alt="DiGi Transform logo" />
          <h4 className="white-text font-weight-bold h4-responsive mr-5">DiGi Transform</h4>
        </Link>
        <MDBNavbarToggler name="navbar-toggler" onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <CustomNavLink to="/">Home</CustomNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <CustomNavLink to="/services">Services</CustomNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <CustomNavLink to="/about">About</CustomNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <CustomNavLink to="/blog">Blog</CustomNavLink>
            </MDBNavItem>            
          </MDBNavbarNav>  
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Gallery</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu className={`dropdown-default ${dropdownMenu}`}>
                  <MDBDropdownItem className={`white-text nav-link ${dropdownItem}`} onClick={() => navigate("/photos")}>Photos</MDBDropdownItem>
                  <MDBDropdownItem className={`white-text nav-link ${dropdownItem}`} onClick={() => navigate("/digital-art")}>Digital art</MDBDropdownItem>
                  <MDBDropdownItem className={`white-text nav-link ${dropdownItem}`} onClick={() => navigate("/watercolour")}>Watercolour</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  {isLoggedIn() ?
                    <span className="mr-2">Hello</span>
                    :
                    <MDBIcon icon="user-lock" />
                  }
                </MDBDropdownToggle>
                <MDBDropdownMenu className={`dropdown-default ${dropdownMenu}`}>
                  {isLoggedIn() ? 
                    <>
                      <MDBDropdownItem className={`white-text nav-link ${dropdownItem}`} onClick={() => navigate("/app/subscription")}>Subscription</MDBDropdownItem>
                      {isAdmin() ? 
                        <MDBDropdownItem className={`white-text nav-link ${dropdownItem}`} onClick={() => navigate("/app/publishing")}>Publishing</MDBDropdownItem>
                        :
                        null
                      }
                      <MDBDropdownItem className={`white-text nav-link ${dropdownItem}`} onClick={() => signout()}>Sign out</MDBDropdownItem>
                    </> 
                    :
                    <>
                      <MDBDropdownItem className={`white-text nav-link ${dropdownItem}`} onClick={() => navigate("/signin")}>Sign in</MDBDropdownItem>
                      <MDBDropdownItem className={`white-text nav-link ${dropdownItem}`} onClick={() => navigate("/signup")}>Create account</MDBDropdownItem>
                    </>
                  }
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  )
}

export default Navbar
