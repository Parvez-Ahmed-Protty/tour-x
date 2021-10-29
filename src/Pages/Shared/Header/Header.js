import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { BiSearchAlt, BiUser } from "react-icons/bi";
import { BsChevronCompactDown } from "react-icons/bs";
import "./Header.css";

const Header = () => {
  return (
    <div className="">
      <Navbar expand="lg ">
        <Container>
          <Navbar.Brand href="/">
            <img src="https://i.ibb.co/JHDY3fd/download.png" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0 text-dark fw-bold"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">
                Home
                <BsChevronCompactDown />
              </Nav.Link>
              <Nav.Link href="#action2">
                Destination
                <BsChevronCompactDown />
              </Nav.Link>
              <Nav.Link href="#action3">
                Gallary
                <BsChevronCompactDown />
              </Nav.Link>
              <Nav.Link href="#action4">
                About Us
                <BsChevronCompactDown />
              </Nav.Link>
              <Nav.Link href="#action5">
                Contact US
                <BsChevronCompactDown />
              </Nav.Link>
            </Nav>
            <div className="">
              <BiSearchAlt className="fs-4 me-4 default-color" />
              <BiUser className="fs-4 default-color" />
            </div>
            <Button variant="outline-success ms-3">Search</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
