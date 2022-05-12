import React from "react";
import "./header.scss";
import navicon from "../Asset/main_icon.svg"
// import leftsidebar from "../Leftsidebarcomponent/Leftsidebar"
import Leftsidebar from "../Leftsidebarcomponent/Leftsidebar";

import Footer from "../footercomponent/Footer";
import Main from "../Maincomponent/Main";


function header() {
  return (
    <>
      {/* <div className="container-fluid">
        <div className="row"> */}
          <nav class={`navbar navbar-expand-lg navbar-light navbar__color  p-2`}>
            <div class="container-fluid">
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
            </div>
          </nav>
        {/* </div>
      </div> */}

      <div>
       <Main/>
      </div>

      {/* <div>
        <Leftsidebar />
      </div> */}
      <div>
      <Footer/>
      </div>
    </>
  );
}

export default header;


// function Example() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch
//       </Button>

//       <Offcanvas show={show} onHide={handleClose}>
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>Offcanvas</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           Some text as placeholder. In real life you can have the elements you
//           have chosen. Like, text, images, lists, etc.
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// }

// render(<Example />);