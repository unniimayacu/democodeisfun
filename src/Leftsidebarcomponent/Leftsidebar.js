import React from 'react'
import "./leftsidebar.scss";
import homeimg from "../Asset/home.svg"
import Leftcard from './Leftcard';


function Leftsidebar() {
  return (
    <>
      <div class="container-fluid">
        <div class="col-2 mt-0  ">
          <div class="row py-3 p-0 ms-0 shadow border Card__color">
            <div class="col-6">
              <div className="">
                <img src={homeimg} />
              </div>
              <div className="p-2">
                {" "}
                <p class="p-2 text-xsm">Home</p>
              </div>
            </div>
            <div class="col-6">
              <div className="">
                <img src={homeimg} />
              </div>
              <div className="p-2">
                {" "}
                <p class="p-1  text-sm ">Student Record</p>
              </div>
            </div>
            <div class="col-6">
              <div className="">
                <img src={homeimg} />
              </div>
              <div className="p-2 text-sm">
                {" "}
                <p class="p-2"> Progress Report</p>
              </div>
            </div>
            <div class="col-6">
              <div className="">
                <img src={homeimg} />
              </div>
              <div className="p-2 text-sm">
                {" "}
                <p class="p-2"> Referal Status</p>
              </div>
            </div>
            <div>
              <Leftcard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Leftsidebar