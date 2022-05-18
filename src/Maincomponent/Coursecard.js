import React from 'react'
import "./main.scss";

function Coursecard(props) {
     const { title, subtitle, imge } = props;
  return (
    <>
      <div className="card   course__card__size w-100">
        <div className=" p-3">
          <div className="student__record__card ms-1 d-flex justify-content-between ">
            <h6 className=" align-items-center p-3  student_recordcard__text ">
              70%
            </h6>
            <div class="p-0">
              <p class=" text-white   ">{title} </p>
              <p class=" text-white student__text__font">{subtitle} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Coursecard