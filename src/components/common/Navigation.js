import React, { Component } from 'react';
import {
  Container,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand><Link to="/" className="brand-link">CodeGem</Link></NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink><Link to="/information" className="nav-link-item">Code Test</Link></NavLink>
            </NavItem>
          </Nav>
          <UncontrolledDropdown inNavbar>
             <DropdownToggle nav caret>
               About
             </DropdownToggle>
             <DropdownMenu right>
               <a href="https://www.linkedin.com/in/blpham/" target="_blank" rel="noopener noreferrer" className="about-me-option">
                 <DropdownItem>
                  LinkedIn
                 </DropdownItem>
               </a>
               <a href="http://www.brianpham.co/" target="_blank" rel="noopener noreferrer" className="about-me-option">
                 <DropdownItem>
                  Portfolio Website
                 </DropdownItem>
               </a>
               <a href="https://github.com/brianlpham21" target="_blank" rel="noopener noreferrer" className="about-me-option">
                 <DropdownItem>
                  GitHub
                 </DropdownItem>
               </a>
               <DropdownItem divider />
               <a href="https://drive.google.com/file/d/1T5xkU8MleEZe1pVktBr47PRm4Az8m729/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="about-me-option">
                 <DropdownItem>
                  Resume
                 </DropdownItem>
               </a>
             </DropdownMenu>
           </UncontrolledDropdown>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;
