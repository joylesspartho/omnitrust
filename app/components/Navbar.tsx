'use client';

import { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AppNavbar() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleClose = () => setExpanded(false); // Mobile menu close

  return (
    <Navbar expand="lg" className="bg-light shadow" sticky="top" expanded={expanded}>
      <Container>
        <Navbar.Brand>
          <Link href="/">
            <img
              src="/favicon.png"
              alt="Omnitrust Properties Ltd."
              style={{ maxHeight: '80px' }}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Link href="/" className="nav-link" onClick={handleClose}>
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/service" className="nav-link" onClick={handleClose}>
                Service
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/about" className="nav-link" onClick={handleClose}>
                About
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/contact" className="nav-link" onClick={handleClose}>
                Contact
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
