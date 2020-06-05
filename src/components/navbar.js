import React, { Component } from "react"
import {
  MDBContainer, MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, 
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact"
import { Link } from 'gatsby'
import CustomNavLink from './custom-link'
import Logo from "../images/logo-48x48.png"
import styles from  './navbar.module.scss'

class NavbarPage extends Component {
  state = {
    isOpen: false
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <MDBNavbar dark expand="md">
        <MDBContainer>
          <Link className="waves-effect waves-light" to='/' style={{display: 'flex', alignItems: 'center'}}>
            <img width={40} src={Logo} className="mr-3" alt="DiGi Transform logo" />
            <h4 className="white-text font-weight-bold h4-responsive mr-5">DiGi Transform</h4>
          </Link>
          <MDBNavbarToggler name="navbar-toggler" onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
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
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <span className="mr-2">Gallery</span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className={`dropdown-default ${styles.dropdownMenu}`}>
                    <MDBDropdownItem className={`white-text ${styles.dropdownItem}`} href="/photos">Photos</MDBDropdownItem>
                    <MDBDropdownItem className={`white-text ${styles.dropdownItem}`} href="/digital-art">Digital art</MDBDropdownItem>
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
                    <MDBDropdownItem className={`white-text ${styles.dropdownItem}`} href="/signin">Sign in</MDBDropdownItem>
                    <MDBDropdownItem className={`white-text ${styles.dropdownItem}`} href="/signup">Create account</MDBDropdownItem>
                    <MDBDropdownItem className={`white-text ${styles.dropdownItem}`} href="#!">My account</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    )
  }
}

export default NavbarPage
