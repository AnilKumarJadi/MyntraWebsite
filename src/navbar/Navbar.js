import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src="/MLogo.png" width={"50px"} alt="" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/men">
                  Men
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/women">
                  Women
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/kids">
                  Kids
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/homeliving">
                  Home&Living
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/beauty">
                  Beauty
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/studio">
                  Studio
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 input-search"
                type="search"
                placeholder="search for products and brands"
                aria-label="Search "
              />
            </form>
            <ul className="navbar-nav ">
              <li className="nav-item">
                <NavLink className="nav-link icons-links" to="/studio" >
                  <i class="fa fa-user-o" aria-hidden="true"></i>
                  <p>Profile</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link icons-links" to="/studio">
                  <i class="fa fa-heart-o" aria-hidden="true"></i>
                  <p>Whishlist</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link icons-links" to="/studio">
                  <i class="ri-handbag-line"></i>
                  <p>Bag</p>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <Navbar expand="lg" className="bg-body-tertiary bbb">
      <Container>
        <Navbar.Brand href="#home">
          <img src="MLogo.png" alt="logo" width={'50px'}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="/kids">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
    </div>
  );
};

export default NavBar;
