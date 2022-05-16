import React from 'react'
import improvement from "../Asset/improvementIcon.svg"
import strengthen from "../Asset/strengthsIcon.svg"


function Mainlist() {
  return (
    <>
      <div className="p-3">
        <div className="d-flex ">
          <img src={improvement} />
          <h6 className="mx-2 ">Improvement</h6>
        </div>
        <div className="">
          <p className="d-flex justify-content-start ">
            Lorem ipsium is dummy text of the printing and typesetting industry.
          </p>
        </div>
        <div className="d-flex ">
          <img src={strengthen} />
          <h6 className="mx-2 ">Strengths</h6>
        </div>
        <div className="">
          <p className="d-flex justify-content-start ">
            Lorem ipsium is dummy text of the printing and typesetting industry.
          </p>
        </div>
        <div className="d-flex ">
          <img src={improvement} />
          <h6 className="mx-2 ">Should focus on</h6>
        </div>
        <div className="">
          <p className="d-flex justify-content-start ">
            Lorem ipsium is dummy text of the printing and typesetting industry.
          </p>
        </div>
        <div className="d-flex ">
          <img src={improvement} />
          <h6 className="mx-2 ">Correctiver Measures</h6>
        </div>
        <div className="">
          <p className="d-flex justify-content-start ">
            Lorem ipsium is dummy text of the printing and typesetting industry.
          </p>
        </div>
      </div>
    </>
  );
}

export default Mainlist