/** @format */

import "./App.css";
import { Header, Chose, Result, Input } from "./components/";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    bahasa: "Indonesia",
    data: [],
  };
  handleCallback = (childData) => {
    this.setState({ bahasa: childData });
  };
  handleResult = (search) => {
    this.setState({ data: search });
  };

  render() {
    return (
      <div>
        <div className="my-bg-color h-20 pt-4">
          <Header />
        </div>
        <div className="static">
          <div className="bg-my-abu-100 rounded-md w-4/5 absolute left-1/2 top-14 -translate-x-1/2">
            <Chose parentCallback={this.handleCallback} />
          </div>
        </div>
        <div className="mx-2 mb-14">
          <div className="mt-10">
            <Input bahasa={this.state.bahasa} dataResult={this.handleResult} />
          </div>
          <div className="my-1">
            <Result bahasa={this.state.bahasa} data={this.state.data} />
          </div>
        </div>
        <div className="fixed bottom-0 bg-my-red-300 w-full py-2">
          <span className="text-my-abu-100 ml-2">copyright &copy; Yosep</span>
        </div>
      </div>
    );
  }
}
