import React from "react"
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#">Resume</Nav.Link>
            <NavDropdown title="Experience" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Internships</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Mars Rover</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Education">Education</Nav.Link>
            <Nav.Link href="#link">Personal</Nav.Link>
        </Nav>
    </Navbar.Collapse>
  </Navbar>
);
  
export default Header;