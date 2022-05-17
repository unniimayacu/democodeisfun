import React from "react";
import Footer from "../footercomponent/Footer";
import Header from "../Headercomponent/Header";
import Leftsidebar from "../Leftsidebarcomponent/Leftsidebar";
import Rightsidebar from "../Rightsidebarcomponent/Rightsidebar";
import Maincards from "./Maincards";
import studprofile from "../Asset/chatProfile.png";
import Studentcard from "./Studentcard";
import timeicon from "../Asset/time.svg"
function Studentrecord() {
  return (
    <>
      <div>
        <Header />
      </div>

      <div className="row p-0 ">
        <div className="col-xl-2 col-lg-2 col-12">
          <Leftsidebar />
        </div>

        {/* <div className="row   "> */}
        <div className="col-xl-8 col-lg-8 col-12 p-0 main__col__color ">
          <div className="row">
            <div className="col-xl-3 col-lg-3  col-12  p-4 student__record__cards ">
              <Studentcard imge={studprofile} title={"ameya abraham"} />
            </div>
            <div className="col-xl-3 col-lg-3  col-12  p-4 ">
              <Studentcard imge={studprofile} title={"ameya abraham"} />
            </div>
            <div className="col-xl-3 col-lg-3  col-12  p-4 ">
              <Studentcard imge={studprofile} title={"ameya abraham"} />
            </div>
          </div>

          <div className="py-5 "></div>

          <div className="row ">
            <div className="col-xl-4 col-lg-4 col-12  ">
              <div className="text-start p-4">
                <h5>Viewing Result in</h5>
                <h3>Jan 2021</h3>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-12 ">
              <div className="p-4">
                <h4>Good Result!</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-12 ">
              <div className="p-4">
                <div className="card p-3 ">
                 <img src={timeicon } height={70} />
                 <div>
                   <h4>View Session</h4>
                 </div>
                </div>
                {/* <Studentcard imge={timeicon} title={"View Session"} /> */}
              </div>
            </div>
          </div>

          <div className="py-3"></div>
        </div>

        {/* </div> */}

        <div className="col-xl-2 col-lg-2 col-12  ">
          <div>
            <Rightsidebar />
          </div>
        </div>
      </div>
      {/* </div> */}
      <div className="">
        <Footer />
      </div>
    </>
  );
}

export default Studentrecord;
