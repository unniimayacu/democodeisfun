import React from 'react'
import "./leftsidebar.scss";
import messageicon from "../Asset/message.svg"

function Leftcard() {
  return (
    <>
      <div class="container">
        <div class="row ">
          {/* <div class="card__row"> */}
          <div class="card p-0">
            <div class="   ">
              <img class=" img__icon shadow" src={messageicon} alt="" />
            </div>
            <div class="card-body">
              <p class="card-title font_size">Explore Your Messages</p>
              <p class="card-subtitle mb-2 text-muted">Card subtitle</p>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Leftcard