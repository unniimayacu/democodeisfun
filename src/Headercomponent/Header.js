import React from "react";
import "./header.scss";
import navicon from "../Asset/main_icon.svg"
// import leftsidebar from "../Leftsidebarcomponent/Leftsidebar"
import Leftsidebar from "../Leftsidebarcomponent/Leftsidebar";


function header() {
  return (
    <>
      <div className="container-fluid">
        <nav class={`navbar navbar-expand-lg navbar-light navbar__color p-4`}>
          <div class="container-fluid">
            {/* <a class="navbar-brand" href="#">
              codei
            </a> */}
            <div >
            <img src={navicon} alt="" />
            </div>

            {/* <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button> */}
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-5  mb-lg-0">
                <div class="d-flex justify-content-start">
                  <div>
                    <input
                      class="form-control  px-5 p-3 "
                      type="search"
                      placeholder="Find your course"
                      aria-label="Search"
                    />
                  </div>
                </div>
                <div className="px-2   ">
                  <button class="btn btn-danger px-5 p-3"> Filter</button>
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
      </div>

      <div >
      <Leftsidebar/>
      </div>

    </>
  );
}

export default header;
