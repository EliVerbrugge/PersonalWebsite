import React from "react"
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Resume">Resume</Nav.Link>
            <Nav.Link href="/Education">Education</Nav.Link>
        </Nav>
    </Navbar.Collapse>
  </Navbar>
);
  
export default Header;