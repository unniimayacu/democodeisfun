import React from 'react'
import "./leftsidebar.scss";
import homeimg from "../Asset/home.svg"
import Leftcard from './Leftcard';
import Cardavatar from './Cardavatar';


function Leftsidebar() {
  return (
    <>
      {/* <div class="container-fluid"> */}
        {/* <div class="col-3 mt-0  "> */}
          <div class="row py-3 p-0 ms-0 px-2 shadow border Card__color">
            <div class="col-6">
              <div className="">
                <img src={homeimg} />
              </div>
              <div className="p-2">
                {" "}
                <p class=" text__size">Home</p>
              </div>
            </div>
            <div class="col-6">
              <div className="">
                <img src={homeimg} />
              </div>
              <div className="p-2">
                {" "}
                <p class="text__size ">Student Records</p>
              </div>
            </div>
            <div class="col-6">
              <div className="">
                <img src={homeimg} />
              </div>
              <div className="p-2 ">
                {" "}
                <p class="text__size"> Progress Reports</p>
              </div>
            </div>
            <div class="col-6">
              <div className="">
                <img src={homeimg} />
              </div>
              <div className="p-2 ">
                {" "}
                <p class="text__size"> Referal Status</p>
              </div>
            </div>
            <div class ="py-3"></div>
            <div>
              <Leftcard />
            </div>
            <div>
              <Cardavatar/>
            </div>
          </div>
        {/* </div> */}
      {/* </div> */}
    </>
  );
}

export default Leftsidebar