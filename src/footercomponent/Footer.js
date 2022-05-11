import React from 'react'
import "./footer.scss";

function Footer() {
  return (
    <>
      <div className=" container-fluid">
        <div className="row  foot__color p-4">
          <div className=" mx-2 d-flex">
            <p class=" p-2 text-white text-end ">
              © 2022-2023 All Rights reserved
            </p>
            <div className=" d-flex mx-4">
              <p class=" p-2 text-white text-end  ">Terms of service</p>
            </div>
            <div className=" mx-4">
              <p class=" p-2 text-white text-end  ">Privacy policy</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer