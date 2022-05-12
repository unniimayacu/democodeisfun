import React from 'react'
import "./leftsidebar.scss";
import { Card,Image } from "react-bootstrap";
import avatarred from "../Asset/ladyAvatarRed.svg"
import avatargreen from "../Asset/ladyAvatarGreen.svg"
function Cardavatar() {
  return (
    <>
      <Card className="mt-5 avatarcard__color">
        <Card.Body>
          <Card.Title className="text-white fs-5">
            <p>Connect</p>{" "}
          </Card.Title>
          <div className="d-flex justify-content-evenly">
            <Image src={avatarred} />
            <div>
              <Image src={avatargreen} />
            </div>
          </div>
          <div className="col-12 p-3">
            <button className=" btn__size px-5 p-2 btn btn-outline-danger text-white justify-content-center">
              Messager
            </button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default Cardavatar