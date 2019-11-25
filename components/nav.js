import React from "react";
import Link from "next/link";
import { Navbar, Nav } from "react-bootstrap";

function Menu() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="./Home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link href="./Home">
            <a className="nav-link">нүүр</a>
          </Link>

          <Link href="./contact">
            <a className="nav-link">contact</a>
          </Link>

          <Link href="./about">
            <a className="nav-link">about</a>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    // <ul>
    //   <li>

    //   </li>
    //   <li>

    //   </li>
    //   <li>

    //   </li>
    // </ul>
  );
}

export default Menu;
