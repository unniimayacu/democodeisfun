import React from 'react'
import "./leftsidebar.scss";
import { Card,Image } from "react-bootstrap";
import avatarred from "../Asset/ladyAvatarRed.svg"
import avatargreen from "../Asset/ladyAvatarGreen.svg"
import avataricon from "../Asset/clockOutlined.svg"
function Cardavatar() {
  return (
    <>
      <Card className="mt-5 avatarcard__color">
        <Card.Body>
          <Card.Title className="text-white fs-5">
            <p>Connect</p>{" "}
          </Card.Title>
          {/* <div className="d-flex justify-content-evenly">
            <Image src={avatarred} />
            <div>
              <Image src={avatargreen} />
            </div>
          </div> */}
          <div>
            <Image src={avataricon} />
          </div>
          <div  className="row py-3" >
            <div className="col-12  d-flex justify-content-center">
              <button className=" btn__size px-4 p-2 btn btn-outline-danger text-white ">
                Messager
              </button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default Cardavatar