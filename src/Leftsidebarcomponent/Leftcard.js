import React from 'react'
import "./leftsidebar.scss";
import messageicon from "../Asset/message.svg"

function Leftcard() {
  return (
    <>
      {/* <div class="container"> */}
      {/* <div class="row "> */}
      {/* <div class="card__row"> */}
      <div className="card p-2  card__color">
        <div class="   ">
          <img class=" img__icon shadow" src={messageicon} alt="" />
        </div>
        <div class="card-body">
          <p class="card-title font_size text-white">Explore Your Messages</p>
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <button className=" btn__size px-5 p-2 btn btn-danger text-lg ">
                Inbox
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
    </>
  );
}

export default Leftcard