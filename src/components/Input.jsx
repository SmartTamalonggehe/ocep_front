/** @format */

import axios from "axios";
import React, { Component } from "react";
import BASE_URL from "../utils/base";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bahasa: [],
    };
  }

  getData = () => {
    axios.get(`${BASE_URL}/api/kamus`).then((res) => {
      this.setState({ bahasa: res.data });
    });
  };
  componentDidMount = () => {
    this.getData();
  };

  componentDidUpdate() {
    // query selector id="bahasa"
    // empty value
    // bahasa.value = "";
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    const input_bhs = document.querySelector("#bahasa");
    if (prevProps.bahasa !== this.props.bahasa) {
      input_bhs.value = "";
    }
    return null;
  }

  handleChange = (event) => {
    const value = event.target.value;
    const dataBahasa = this.state.bahasa;
    const { bahasa } = this.props;
    if (value === "") {
      return this.props.dataResult([]);
    }
    // filter dataBahasa
    const search = dataBahasa.filter((item) => {
      if (bahasa === "Indonesia") {
        return item.indonesia.bhs_indonesia
          .toLowerCase()
          .includes(value.toLowerCase());
      }
      if (bahasa === "Waropen") {
        return item.waropen.bhs_waropen
          .toLowerCase()
          .includes(value.toLowerCase());
      }
      return null;
    });

    this.props.dataResult(search);
  };

  render() {
    const { bahasa } = this.props;
    return (
      <div>
        <input
          onChange={this.handleChange}
          type="text"
          className="py-2 px-2 rounded-sm w-full bg-my-abu-300 text-my-abu-100"
          id="bahasa"
          autoComplete="off"
          placeholder={bahasa}
        />
      </div>
    );
  }
}
