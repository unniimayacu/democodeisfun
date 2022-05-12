import React from "react";
import Leftsidebar from "../Leftsidebarcomponent/Leftsidebar";
import "./main.scss";
import Maincards from "./Maincards";
import calanderorange from "../Asset/calenderOrange.svg";
import Selectbox from "./Selectbox";
import Table from "./Table";
import Rightsidebar from "../Rightsidebarcomponent/Rightsidebar";
import Cardslearn from "../Rightsidebarcomponent/Cardslearn";
import Mainlist from "./Mainlist";
// import { Table } from "react-bootstrap";
// import Title from "antd/lib/skeleton/Title";

function Main() {
  return (
    <>
      {/* <div className="container-fluid"> */}
      <div className="row p-0 ">
        <div className="col-xl-2 col-lg-2 col-12">
          <Leftsidebar />
        </div>

        <div className="col-xl-8 col-lg-8 col-12 p-0 main__col__color">
          <div>
            <h6 className="text-start p-2">Progress Reports</h6>
          </div>

          <div className="row">
            <div className=" col-xl-4 col-lg-4 col-12 d-flex p-3 ">
              <Selectbox />
            </div>
            <div className=" col-xl-4 col-lg-4 col-12 d-flex p-3 ">
              <Selectbox />
            </div>
          </div>

          <div className="py-3"></div>

          <div className="row  ">
            <div className="col-xl-2 col-lg-2 col-12 d-flex  justify-content-start p-3  ">
              <div className="">
                {" "}
                <Maincards
                  imge={calanderorange}
                  title={"Course"}
                  subtitle={"python"}
                />
              </div>
              <div className="">
                {" "}
                <Maincards
                  imge={calanderorange}
                  title={"Posted "}
                  subtitle={"python"}
                />
              </div>
              <div className="">
                {" "}
                <Maincards
                  imge={calanderorange}
                  title={"Posted "}
                  subtitle={"python"}
                />
              </div>
            </div>
          </div>

          <div className="py-3"></div>

          <div className="row">
            <div className="col-xl-6 col-lg-6 col-12 mt-2 ">
              <div>
                <Table />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-12 mt-2">
              <div className="  ">
                <Mainlist />
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-2 col-lg-2 col-12  ">
          <div>
            <Rightsidebar />
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Main;
