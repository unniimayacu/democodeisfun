import React from 'react'
import "./footer.scss";

function Footer() {
  return (
    <>
      {/* <div className=" container-fluid"> */}
      <div className="row  foot__color p-2">
        <div className="  d-flex justify-content-evenly ">
          <p class=" p-2 text-white  ">© 2022-2023 All Rights reserved</p>
          <div className=" d-flex justify-content-evenly  ">
            <p class=" p-2 text-white  ">Terms of service</p>
          </div>
          <div className=" mx-4">
            <p class=" p-2 text-white  ">Privacy policy</p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Footer