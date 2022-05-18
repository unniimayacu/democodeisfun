import React from "react";
import "./rightsidebar.scss";
import messageicon from "../Asset/message.svg";
import Cardslearn from "./Cardslearn";
import { Card, Image } from "react-bootstrap";
import moneyicon from "../Asset/moneyIcons.svg";

function Rightsidebar() {
  return (
    <>
      <div class="row  p-5    px-3 shadow  Card__color  rightside__bar__row  right__sidebar__size ">
        <Card className="mt-5  rightcards__color   ">
          <Card.Body>
            <Card.Title className="text-white  text-start  p-0"></Card.Title>
            <p class=" text-white text-start">Have any Queries</p>
            <p class=" text-white text-start font__size">
              {" "}
              Lorem lpsium is dummy text of{" "}
            </p>

            <div className="row">
              <div className="col-12 p-3">
                <button className=" btn__size px-4 p-2 btn btn-danger text-white justify-content-center rightsidebarbtn__size">
                  800-499-4769
                </button>
              </div>
              {/* <div className="  col-12 justify-content-center ">
                <button className="btn btn-danger px-5 p-3 rightsidebarbtn__size">
                  800-499-4769
                </button>
              </div> */}
            </div>
          </Card.Body>
        </Card>

        {/* <div class="card mt-5 borderless cards__color ">
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
        </div> */}
        <div>
          <Cardslearn />
        </div>
        <div className="py-5"></div>
      </div>
    </>
  );
}

export default Rightsidebar;
