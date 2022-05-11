import React from 'react'
import "./main.scss";

function Selectbox() {
  return (
    <>
      <div>
        {/* <div className="col-xl-3 col-lg-4 col-12"> */}
        <select
          className="form-select text__color fw-normal text__size px-5 py-2  p-2 text-start"
          aria-label="Default select example"
        >
          <option selected className="">
            Select Student Name
          </option>
          <option value="1">One</option>
        </select>
        {/* </div> */}
      </div>
    </>
  );
}

export default Selectbox