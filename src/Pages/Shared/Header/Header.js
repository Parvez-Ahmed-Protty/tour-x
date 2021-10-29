import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BiSearchAlt, BiUser } from "react-icons/bi";
import { BsChevronCompactDown } from "react-icons/bs";
import { Link } from "react-router-dom";
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
              <Nav.Link as={Link} to="/home">
                Home
                <BsChevronCompactDown />
              </Nav.Link>
              <Nav.Link as={Link} to="/order">
                My Order
                <BsChevronCompactDown />
              </Nav.Link>
              <Nav.Link as={Link} to="/createNewEvent">
                Create New Event
                <BsChevronCompactDown />
              </Nav.Link>
              <Nav.Link as={Link} to="/management">
                Managment
                <BsChevronCompactDown />
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact US
                <BsChevronCompactDown />
              </Nav.Link>
            </Nav>
            <div className="">
              <BiSearchAlt className="fs-4 me-4 default-color" />
              <BiUser className="fs-4 default-color" />
            </div>
            <Link to="/login">
              <button className="btn default-bg text-white ms-3">Login</button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
