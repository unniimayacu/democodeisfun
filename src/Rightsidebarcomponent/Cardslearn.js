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
          <div className="imges__style  p-0">
            <img src={moneyicon} height={60} />

            <div className="img__style">
              <img src={moneyicon} height={60} />
            </div>
          </div>
       
          <div className="">
            <button className=" btn__size px-5 p-3 btn btn-danger text-white justify-content-center">
              Learn More
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
    
  );
}

export default Cardslearn