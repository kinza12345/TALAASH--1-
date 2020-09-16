import React, { Component } from "react";
import "./Stickyicon.css";
class Stickyicon extends Component {
  render() {
    return (
      <div>
        <div className="icon-bar">
          <a
            href="https://www.facebook.com/TALAASHmissingpeoplefinder/"
            className="facebook"
          >
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://twitter.com/TALAASH55880236" className="twitter">
            <i className="fa fa-twitter"></i>
          </a>
          <a
            href="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxUERlTCg8_k0Q7B_D-rTbce14BlcSl1V0kTZD5VY_aT3Dghyx&usqp=CAU"
            className="google"
          >
            <i className="fa fa-phone"></i>
          </a>

          <a href="https://www.youtube.com/" className="youtube">
            <i className="fa fa-youtube"></i>
          </a>
        </div>
      </div>
    );
  }
}
export default Stickyicon;
