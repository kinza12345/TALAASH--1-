import React, { Component } from "react";
import Stickyicon from "../components/Stickyicon.js";
import "./ImageCoursel.css";
import Navbar from "./Navbar.js";

class Imagecoursel extends Component {
  render() {
    return (
      <div>
        <div>
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <Navbar />
            <ol className="carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>

            <div className="carousel-inner" style={{ width: "100%" }}>
              <div className="item active">
                <Stickyicon />
                <img
                  src="https://cambridgewords.files.wordpress.com/2017/05/helping-hand.jpg"
                  alt="Los Angeles"
                  style={{ width: "100px", height: "100px" }}
                />

                <h1>Why TALAASH?</h1>
                <p class="lead">
                  TALAASH is a website that help people in finding there loved
                  ones who got missed. It reduce the physical effort of people
                  by sharing the missing report to police station, hospital and
                  organization in just one click and when any of them and any
                  person found a missing person he/she will report his/her
                  relatives
                </p>
              </div>

              <div class="item">
                <Stickyicon />
                <img
                  src="https://scontent.fisb6-1.fna.fbcdn.net/v/t1.0-9/60902644_2024104574383595_4456096765090725888_n.jpg?_nc_cat=108&_nc_sid=8024bb&_nc_eui2=AeFnPUOEoM4qD5wLByvrWsZBPpcfYc_y7AY-lx9hz_LsBuLuT-8jWm4vx74Di__tytV23z-PphPa4KUbNlDTtN9q&_nc_ohc=KPYedau_DMgAX9siFx2&_nc_ht=scontent.fisb6-1.fna&oh=d13815aa403304f4c948aa4ea4ba8014&oe=5EB69053"
                  alt="Chicago"
                  style={{ width: "100%", height: "50%" }}
                />
                <div class="carousel-caption">
                  <h3>Chicago</h3>
                  <p>Thank you, Chicago!</p>
                </div>
              </div>

              <div className="item">
                <Stickyicon />
                <img
                  src="https://www.wtvq.com/wp-content/uploads/2018/02/investigation-clues-clue-fingerprint-magnifying-glass-search.jpg"
                  alt="New york"
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            <a
              className="left carousel-control"
              href="#myCarousel"
              data-slide="prev"
            >
              <span className="glyphicon glyphicon-chevron-left"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="right carousel-control"
              href="#myCarousel"
              data-slide="next"
            >
              <span className="glyphicon glyphicon-chevron-right"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Imagecoursel;
