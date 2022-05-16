import React from 'react'
import {
  Form
} from "react-bootstrap";

function Selectdate() {
  return (
    <>
      {/* <div className="row "> */}
        <div className="selctdate__main    ">
          <Form.Select aria-label="Default select example ">
            <option>JAN</option>
            <option value="1">FEB</option>
            <option value="2">MAR</option>
            <option value="3">APRIL</option>
            <option value="1">MAY</option>
            <option value="2">JUNE</option>
            <option value="3">JULY</option>
            <option value="1">AUG</option>
            <option value="2">SEPT</option>
            <option value="3">OCT</option>
          </Form.Select>
        </div>
        {/* <div className="selctdate__main  col-xl-4  col-lg-4 col-12  ">
          <Form.Select aria-label="Default select example ">
            <option>2021</option>
            <option value="1">2020</option>
            <option value="2">2019</option>
            <option value="3">2018</option>
            <option value="1">2017</option>
           
          </Form.Select>
        </div>
        <div className="selctdate__main  col-xl-5  col-lg-5 col-12  ">
          <Form.Select aria-label="Default select example ">
            <option>Course</option>
            <option value="1">Python</option>
            <option value="2">Software Testing</option>
            <option value="3">PHP</option>
           
          </Form.Select>
        </div> */}
      {/* </div> */}
    </>
  );
}

export default Selectdate