import React from "react";
import { Slide } from "react-slideshow-image";
//import Stickyicon from "../components/Stickyicon.js";
import "./ImageCoursel.css";
import Navbar from "./Navbar.js";
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};

const Data = () => {
  return (
    <div>
      <Navbar />
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url("https://www.economist.com/img/b/1280/720/85/sites/default/files/images/print-edition/20180901_IRD001_0.jpg")`,
              }}
            >
              <span>
                <h1 class="text text-white">Why TALAASH?</h1>
                <p class="lead text white">
                  TALAASH will help you find your loved ones who got missed.
                </p>
                <button class="btn btn-secondary btn-roundeds">
                  {" "}
                  About us
                </button>
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url("https://2.bp.blogspot.com/-hVNmmOLxLY0/VXAjPCtgtXI/AAAAAAAAAwo/bGBLZzLzX_Y/s1600/banner3.jpg")`,
              }}
            >
              <span></span>
              
            </div>
          </div>
        </Slide>
      </div>
      
    </div>
  );
};
export default Data;
