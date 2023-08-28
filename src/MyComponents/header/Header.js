import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import CompanyLogo from '../../assets/CompanyLogo.png'
import { NavDropdown, NavItem } from 'react-bootstrap';
function Header(props) {
  return (
    <section className='header-container'>
      <Navbar className='navbar' fixed="top">
        <img className="leading-logo" src={CompanyLogo} />
        <Navbar.Brand className="navbar-text" href="#home">{props.title}</Navbar.Brand>

        <NavItem className="navbar-item">How it works</NavItem>
        <NavItem className="navbar-item">
          <NavDropdown title="WorkFlows" id="navbarScrollingDropdown">
            <NavDropdown.Item className="navbar-item-inner" href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item className="navbar-item-inner" href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className="navbar-item-inner" href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
        </NavItem>
        <NavItem className="navbar-item">Download</NavItem>

      </Navbar>
    </section>
  )
}
export default Header;
