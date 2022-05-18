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
      <div class="row   py-5 shadow  Card__color  leftside__bar__row   leftside__bar__size">
        <div class="col-6">
          <div className="">
            <img src={homeimg} />
          </div>
          <div className="">
            {" "}
            <p class=" text__size">Home</p>
          </div>
        </div>
        <div class="col-6">
          <div className="">
            <img src={homeimg} />
          </div>
          <div className="p-">
            {" "}
            <p class="text__size ">Student Records</p>
          </div>
        </div>
        <div class="col-6">
          <div className="">
            <img src={homeimg} />
          </div>
          <div className="p- ">
            {" "}
            <p class="text__size"> Progress Reports</p>
          </div>
        </div>
        <div class="col-6">
          <div className="">
            <img src={homeimg} />
          </div>
          <div className="p- ">
            {" "}
            <p class="text__size"> Referal Status</p>
          </div>
        </div>
        <div class="py-3"></div>
        <div>
          <Leftcard />
        </div>
        <div>
          <Cardavatar />
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
}

export default Leftsidebar