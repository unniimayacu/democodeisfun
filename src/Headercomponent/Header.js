import React, { useState } from "react";
import "./header.scss";
import navicon from "../Asset/main_icon.svg"
// import leftsidebar from "../Leftsidebarcomponent/Leftsidebar"
import Leftsidebar from "../Leftsidebarcomponent/Leftsidebar";
import homeicon from "../Asset/home_filled_white.svg";
import Footer from "../footercomponent/Footer";
import Main from "../Maincomponent/Main";
// import filtericon from "../Asset/filter_icon-dark.svg";
import {Offcanvas,Button, Navbar,Container,NavDropdown,Nav} from "react-bootstrap"

function Header() {

  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <nav
            class={`navbar navbar-expand-lg navbar-light navbar__color header__nav__but  p-3`}
          >
            {/* <div class="container-fluid  "> */}
            {/* <a class="navbar-brand" href="#">
              codei
            </a> */}
            <div>
              <img src={navicon} alt="" />
            </div>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-5  mb-lg-0">
                <div class="d-flex justify-content-start">
                  <div>
                    <input
                      class="form-control my-2  px-4 p-2 "
                      type="search"
                      placeholder="Find your course"
                      aria-label="Search"
                    />
                  </div>
                </div>
                <div className="mx-2   ">
                  <button class="btn btn-danger px-4 p-2 my-2"> Filter</button>
                </div>

                <div class="dropdown  p-3  ">
                  <li
                    class=" text-white dropdown-toggle  mx-5"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Courses
                  </li>
                  <ul
                    class="dropdown-menu dropdown-menu-dark"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <li>
                      <a class="dropdown-item active" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="dropdown  p-3  ">
                  <li
                    class=" text-white dropdown-toggle  mx-2"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    View Shedule
                  </li>
                  <ul
                    class="dropdown-menu dropdown-menu-dark"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <li>
                      <a class="dropdown-item active" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                  </ul>
                </div>
              </ul>
            </div>
            {/* </div> */}
          </nav>
          <Navbar
            bg="light"
            expand="lg"
            className="navbar__color  p-3   navbar__header__view p-0"
          >
            <Container>
              <Navbar.Brand>
                <i variant="primary" onClick={handleShow}>
                  Link
                </i>

                <Offcanvas show={show} onHide={handleClose}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body></Offcanvas.Body>
                </Offcanvas>
              </Navbar.Brand>

              <Navbar.Brand href="me-0">
                <img src={navicon} alt="" />
                {/* <div className="me-auto">
                  <img src={navicon} alt="" />
                </div> */}
              </Navbar.Brand>

              {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}

              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  {/* <Nav.Link href="#home">Home</Nav.Link> */}
                  {/* <Nav.Link href="#link">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <div>
            <Main />
          </div>

          <div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

