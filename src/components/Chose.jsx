/** @format */

import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default class Chose extends Component {
  // state
  state = {
    chose: "Indonesia",
  };
  handleChose = () => {
    // get data-id="ket"
    const ket = document.querySelectorAll('[data-id="ket"]');

    // change state chose
    if (this.state.chose === "Indonesia") {
      this.setState({ chose: "Waropen" });
      this.props.parentCallback("Waropen");
    } else {
      this.setState({ chose: "Indonesia" });
      this.props.parentCallback("Indonesia");
    }

    ket.forEach((item) => {
      // if class is order-1 change to order-3
      if (item.classList.contains("order-1")) {
        item.classList.remove("order-1");
        item.classList.add("order-3");
      }
      // if class is order-3 change to order-1
      else if (item.classList.contains("order-3")) {
        item.classList.remove("order-3");
        item.classList.add("order-1");
      }
    });
  };
  render() {
    return (
      <div>
        <div className="flex py-3 justify-center text-my-red-300 select-none">
          <span className="order-2 mx-4 mt-1 fa-lg" onClick={this.handleChose}>
            <FontAwesomeIcon icon={faArrowRightArrowLeft} />
          </span>
          <span className="text-lg order-1" data-id="ket">
            Indonesia
          </span>
          <span className="text-lg order-3" data-id="ket">
            Waropen
          </span>
        </div>
      </div>
    );
  }
}
