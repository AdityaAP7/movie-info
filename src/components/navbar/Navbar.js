import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { ImSearch } from "react-icons/im";
import { BsFillHeartFill } from "react-icons/bs";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.love);
  const location = useLocation();

  return (
    <NavbarBs expand="lg" className="bg-dark-blue fw-bold py-1 navbar">
      <Container>
        <NavbarBs.Brand as={Link} to="/MovieInfoApp">
          <Logo />
        </NavbarBs.Brand>

        <NavbarBs.Toggle
          className="bg-light"
          aria-controls="basic-navbar-nav"
        />

        <NavbarBs.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4 nav align-items-center">
            <Nav.Link
              as={Link}
              to="/MovieInfoApp"
              className={`text-light ${
                location.pathname === "/MovieInfoApp" ? "active" : ""
              }`}
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/MovieInfoApp/movies"
              className={`text-light ${
                location.pathname === "/MovieInfoApp/movies" ? "active" : ""
              }`}
            >
              Movies
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/MovieInfoApp/about"
              className={`text-light ${
                location.pathname === "/MovieInfoApp/about" ? "active" : ""
              }`}
            >
              About Us
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/MovieInfoApp/contact"
              className={`text-light ${
                location.pathname === "/MovieInfoApp/contact"
                  ? "active"
                  : ""
              }`}
            >
              Contact Us
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/MovieInfoApp/watchlist"
              className={`love-icon text-light fs-4 ${
                location.pathname === "/MovieInfoApp/watchlist"
                  ? "active"
                  : ""
              }`}
            >
              <BsFillHeartFill />
              <div className="loves-num bg-red flex-center rounded-circle">
                {state.length}
              </div>
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/MovieInfoApp/search"
              className={`terch-icon text-light fs-5 ${
                location.pathname === "/MovieInfoApp/search" ? "active" : ""
              }`}
            >
              <ImSearch />
            </Nav.Link>
          </Nav>
        </NavbarBs.Collapse>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
