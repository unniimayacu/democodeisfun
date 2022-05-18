import React from "react";
import "./main.scss";
import Footer from "../footercomponent/Footer";
import Header from "../Headercomponent/Header";
import Leftsidebar from "../Leftsidebarcomponent/Leftsidebar";
import Rightsidebar from "../Rightsidebarcomponent/Rightsidebar";
import Maincards from "./Maincards";
import studprofile from "../Asset/chatProfile.png";
import Studentcard from "./Studentcard";
import timeicon from "../Asset/time.svg"
import Coursecard from "./Coursecard";
import roundedicon from "../Asset/addRounded.svg"
import { AiOutlinePlus } from "react-icons/ai";
import { MdMoreVert } from "react-icons/md";
function Studentrecord() {
  return (
    <>
      <div className="col-xl-12 col-lg-12  col-12">
        <Header />
      </div>

      <div className="row p-0 ">
        <div className="col-xl-2 col-lg-2  col-12">
          <div>
            <Leftsidebar />
          </div>
        </div>

        {/* <div className="row   "> */}
        <div className="col-xl-8 col-lg-8   col-12 p-0 main__col__color ">
          <div className="row studentrecord__direction">
            <div className="col-xl-3 col-lg-3   col-12     ">
              <Studentcard
                imge={studprofile}
                title={
                  <div>
                    <p className="fs-6">Ameya Abraham</p>
                  </div>
                }
              />
            </div>
            <div className="col-xl-3 col-lg-3   col-12    ">
              <Studentcard
                imge={studprofile}
                title={
                  <div>
                    <p className="fs-6">Ameya Abraham</p>
                  </div>
                }
              />
            </div>
            <div className="col-xl-3 col-lg-3  col-12    ">
              <Studentcard
                imge={studprofile}
                title={
                  <div>
                    <p className="fs-6">Ameya Abraham</p>
                  </div>
                }
              />
            </div>
            <div className="col-xl-3 col-lg-3   col-12   ">
              <div className="card p-4 py-4    mt-4 mx-4  student__card_size_dotted   ">
                <div className="student__record__icon">
                  <AiOutlinePlus />
                </div>

                <div class="py-3"></div>
              </div>
            </div>
          </div>

          <div className="py-3 "></div>

          <div className="row ">
            <div className="col-xl-4 col-lg-4  col-12  ">
              <div className="ms-2 p-4">
                <h6 className="student_recordcard__text">Viewing Result in</h6>
                <h5 className="student_recordcard__text  bold-text">
                  Jan 2021
                </h5>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-12 ">
              <div className="p-4 ms-0">
                <div className="d-flex justify-content-center p-1 ">
                  {/* <img src={timeicon} height={60} /> */}
                  <div className="student__record__card">
                    <h6 className="d-flex justify-content-center p-2 student_recordcard__text ">
                      70%
                    </h6>
                  </div>
                  <div className=" p-3">
                    <h6 className="student_recordcard__text">Good Result!</h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-12 ">
              <div className="p-4">
                <div className="card p-3  ">
                  <div className="d-flex justify-content-center p-1 ">
                    <img src={timeicon} height={60} />
                    <div className=" p-3">
                      <h6 className="student_recordcard__text">
                        View Sessions
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-3"></div>

          <div className="row">
            {/* <div className="container-fluid"> */}
              <div className="col-xl-3 col-lg-3  col-12    ">
                <Coursecard
                  title={<h6>Course1</h6>}
                  subtitle={"Test result:xx"}
                />
              </div>
              <div className="col-xl-3 col-lg-3  col-12   ">
                <Coursecard
                  title={<h6 className="">Course2</h6>}
                  subtitle={"Test result:xx"}
                />
              </div>
              <div className="col-xl-3 col-lg-3  col-12   ">
                <Coursecard
                  title={<h6>Course3</h6>}
                  subtitle={"Test result:xx"}
                />
              </div>
              <div className="col-xl-3 col-lg-3  col-12   ">
                <Coursecard
                  title={<h6>Course4</h6>}
                  subtitle={"Test result:xx"}
                />
              </div>
            {/* </div> */}
          </div>
          <div className="py-2"></div>

          <div className="row">
            <div className="col-12 d-flex-justify-content-center">
              <div>
                <button className="p-1 px-4 student__add_but text-white btn btn-danger">
                  Request A Course
                  <img className="ms-3" src={roundedicon} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* </div> */}

        <div className="col-xl-2 col-lg-2  col-12  ">
          <div>
            <Rightsidebar />
          </div>
        </div>
      </div>
      {/* </div> */}
      <div className="col-xl-12 col-lg-12  col-12">
        <Footer />
      </div>
    </>
  );
}

export default Studentrecord;
