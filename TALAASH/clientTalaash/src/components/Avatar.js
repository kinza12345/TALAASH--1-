import React, { Component } from "react";
import "./Avatar.css";
import "tachyons";
import "./pic1.jpeg";
import "./pic2.jpeg";
import "./pic3.jpeg";
import "./pic4.jpeg";
//const Avatar = props => {
class Avatar extends Component {
  render() {
    return (

        <div class="container-lg bg-white">
        <div class=" text-center ">
        <h2 class="display-4 text-dark ">
              <b class="text-justify">What To Do</b>
            </h2>
          <div class="card-deck  ">
            <div class="card grow ">
              <img
                class="card-img-top"
                src={require("./pic1.jpeg")}
                alt="Snow"
              />
              <div class="card-body">
                <h1 class="card-title" style={{ color: "black" }}>
                  <b>Create Account</b>
                </h1>
                <p class="card-text" style={{ color: "black" }}>
                  Simple and quick creation of account on TALAASH within
                  seconds. Easy to use
                </p>
              </div>
            </div>
            <div class="card grow">
              <img
                class="card-img-top"
                src={require("./pic2.jpeg")}
                alt="Snow"
              />
              <div class="card-body">
                <h1 class="card-title" style={{ color: "black" }}>
                  <b>File Missing Report</b>
                </h1>
                <p class="card-text" style={{ color: "black" }}>
                  *File report for Missing Person* 
                   Online without any
                  Physical effort
                </p>
              </div>
            </div>

            <div class="card grow">
              <img
                class="card-img-top"
                src={require("./pic3.jpeg")}
                alt="Snow"
              />
              <div class="card-body">
                <h1 class="card-title" style={{ color: "black" }}>
                  <b>Share with a Click</b>
                </h1>
                <p class="card-text" style={{ color: "black" }}>
                  *Maintain Profile*    
                   Share with Police, Hospital and NGO
                </p>
              </div>
            </div>
            <div class="card grow">
              <img
                class="card-img-top"
                src={require("./pic4.jpeg")}
                alt="Snow"
              />
              <div class="card-body">
                <h1 class="card-title" style={{ color: "black" }}>
                  <b>Face Recognition</b>
                </h1>
                <p class="card-text" style={{ color: "black" }}>
                  *Add image*  <p></p>Match with recognized images
                </p>
              </div>
            </div>
          </div>
          </div>
          
        </div>
      
    );
  }
}
export default Avatar;
/*

<div>
<div className="avatarstyle ma4 tc">
  <h1 class="display-3 ">About Us</h1>
</div>
<div className="mainpage">
  <div className="container" style={{ marginLeft: "350px" }}>
    <div className="avatarstyle  ma4 bg-light-purple dib grow  tc">
      <div className="avatarstyle img">
        <img
          src={
            "https://image.shutterstock.com/image-illustration/illustration-depicting-computer-screen-capture-600w-286038131.jpg"
          }
          alt="Avatar"
        />
      </div>
    </div>
    <div className="avatarstyle img ma5  dib grow ">
      <img
        src={
          "https://image.shutterstock.com/image-illustration/illustration-depicting-computer-screen-capture-600w-286038131.jpg"
        }
        alt="Avatar"
        border="5"
      />
    </div>
    <div className="avatarstyle img ma4 bg-light-purple dib grow ">
      <img
        src={
          "https://image.shutterstock.com/image-vector/illustration-love-mother-daughter-on-600w-180776753.jpg"
        }
        alt="Avatar"
      />
    </div>
  </div>
</div>*/
