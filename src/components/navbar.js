import React, { useState } from "react"
import {
  MDBContainer, MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, 
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact"
import { Link, navigate } from 'gatsby'
import CustomNavLink from './custom-link'
import Logo from "../images/logo-48x48.png"
import styles from  './navbar.module.scss'
import { isLoggedIn, logout } from './app-user'
// import GDriveInit from './gdrive-ini'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [loggedIn, setLoggedIn] = useState(isLoggedIn())
  const [gSignedIn, setGSignedIn] = useState(false)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }    
  
  const signout = () => {
    logout()
    setLoggedIn(false)
  }
  
  return (
    <MDBNavbar dark expand="md">
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
              <CustomNavLink to="/articles">Articles</CustomNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <CustomNavLink to="/about">About</CustomNavLink>
            </MDBNavItem>
            {/* <MDBNavItem>
              <CustomNavLink to="/blog">Blog</CustomNavLink>
            </MDBNavItem>             */}
          </MDBNavbarNav>  
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Gallery</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu className={`dropdown-default ${styles.dropdownMenu}`}>
                  <MDBDropdownItem className={`white-text nav-link ${styles.dropdownItem}`} onClick={() => navigate("/photos")}>Photos</MDBDropdownItem>
                  <MDBDropdownItem className={`white-text nav-link ${styles.dropdownItem}`} onClick={() => navigate("/digital-art")}>Digital art</MDBDropdownItem>
                  <MDBDropdownItem className={`white-text nav-link ${styles.dropdownItem}`} onClick={() => navigate("/watercolour")}>Watercolour</MDBDropdownItem>
                  {/* External link to Google Photos */}
                  {/* <a 
                    href="https://photos.app.goo.gl/wrzoHVtjjNUc4PCe7" 
                    target='_blank' 
                    className={`white-text nav-link ${styles.dropdownItem}`}
                  >
                    Watercolour
                  </a> */}
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className={`dropdown-default ${styles.dropdownMenu}`}>
                  {loggedIn ? 
                    <>
                      <MDBDropdownItem className={`white-text nav-link ${styles.dropdownItem}`} onClick={() => navigate("/")}>My account</MDBDropdownItem>
                      <MDBDropdownItem className={`white-text nav-link ${styles.dropdownItem}`} onClick={() => signout()}>Sign out</MDBDropdownItem>
                    </> :
                    <>
                      <MDBDropdownItem className={`white-text nav-link ${styles.dropdownItem}`} onClick={() => navigate("/signin")}>Sign in</MDBDropdownItem>
                      <MDBDropdownItem className={`white-text nav-link ${styles.dropdownItem}`} onClick={() => navigate("/signup")}>Create account</MDBDropdownItem>
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
