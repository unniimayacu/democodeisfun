import React from "react";

function Rightsidebar() {
  return (
    <>
      <div className="row ">
        <div className="col-3">
          <div className="card p-2  card__color">
            <div class="   ">
              <img class=" img__icon shadow" src={messageicon} alt="" />
            </div>
            <div class="card-body">
              <p class="card-title font_size text-white">
                Explore Your Messages
              </p>
              <div className="">
                <button className=" btn__size px-5 p-2 btn btn-danger justify-content-center">
                  Inbox
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rightsidebar;
