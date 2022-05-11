import React from "react";
import "./main.scss";
// import { CardGroup,Card } from 'react-bootstrap';
import calanderorange from "../Asset/calenderOrange.svg";

function Maincards(props) {
  const { title, subtitle, imge} = props;

  return (
    <>
      <div className="card px-5 p-3  border border-3 ">
        <div class=" ">
          <img src={imge} alt="" />
        </div>
        <div class="card-body">
          <p class="card-title font_size">{title} </p>
          <p class="card-title font_size">{subtitle} </p>
        </div>
      </div>
    </>
  );
}

export default Maincards;

{
  /* <div className="d-flex justify-content-center ">
                <img src={calanderorange} height={30} width={30} alt="" />
              </div> 
            
            {content ? (
          <div class="   ">
            <img src={content} alt="" />
          </div>
        ) : null}
            */
}
