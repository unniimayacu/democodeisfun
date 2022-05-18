import React from 'react'
import "./rightsidebar.scss"
import { Card, Image } from "react-bootstrap";
// import avatarred from "../Asset/ladyAvatarRed.svg";
// import avatargreen from "../Asset/ladyAvatarGreen.svg";
import moneyicon from "../Asset/moneyIcons.svg";
function Cardslearn() {
  return (
    <div>
      <Card className="mt-5 avatarcard__color">
        <Card.Body>
          <Card.Title className="text-white  text-start  p-0">
            <p>Refer A Friend & Get Rewards</p>{" "}
          </Card.Title>
          <div>
            <p className=" text-white font__size ">
              Lorem ipsium is simply dummy text of
            </p>
          </div>

          <div className="row">
            <div className="col-12 cardslearn__img">
              <div className="imges__style  p-0">
                <img src={moneyicon} height={50} />
              </div>
              <div className="img__style">
                <img src={moneyicon} height={50} />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 d-flex justify-content-center ">
              <button className=" btn__size px-4 p-2 btn btn-danger text-white ">
                Learn More
              </button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cardslearn