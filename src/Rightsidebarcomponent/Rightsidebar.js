import React from "react";
import "./rightsidebar.scss";
import messageicon from "../Asset/message.svg";
import Cardslearn from "./Cardslearn";

function Rightsidebar() {
  return (
    <>
      <div class="row py-3 p-2    px-2 shadow border Card__color">
        <div class="card mt-5 borderless cards__color ">
          <div class="card-body">
            <p class=" text-white text-start">Have any Queries</p>
            <p class=" text-white text-start font__size">
              {" "}
              Lorem lpsium is dummy text of {" "}
            </p>
            <div className="">
              <button className="btn btn-danger px-5 p-3 rightsidebarbtn__size">800-499-4769</button>
            </div>
          </div>
        </div>
        <div>
          <Cardslearn/>
        </div>
        <div className="py-5" ></div>
      </div>
    </>
  );
}

export default Rightsidebar;
