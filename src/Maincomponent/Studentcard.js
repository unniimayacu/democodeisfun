import React from 'react'
import "./main.scss";
import { MdMoreVert } from "react-icons/md";

function Studentcard(props) {
     const { title,  imge } = props;
  return (
    <>
      <div className="card    mt-4 ms-3  student__card_size   ">
        <div className=" text-end student__card__icon">
          <MdMoreVert />
        </div>
        <div class=" ">
          <img src={imge} alt="" height={80} />
        </div>

        <div class="py-3">
          <p class=" font_size    ">{title} </p>
          {/* <p class="card-title font_size  main__cards__color ">{subtitle} </p> */}
        </div>
      </div>
    </>
  );
}

export default Studentcard