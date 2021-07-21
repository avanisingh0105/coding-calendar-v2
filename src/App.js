import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import Remove from "./Remove";
import Settings from "./Settings";
import { Tab } from "semantic-ui-react";
import CodeForces from "./CodeForces.png";
import CodeChef from "./codechef.png";
import HackerEarth from "./hackerearth.svg";
import HackerRank from "./hackerrank.png";
import LeetCode from "./leetcode.png";
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      removeContest:[]
    }
  }
  render() {
    var icons = { CodeChef, HackerEarth, CodeForces, HackerRank, LeetCode };
    var panes = [
      {
        menuItem: { key: "home", icon: "home", content: "Home" },
        render: () => <Home icons={icons}></Home>,
      },
      {
        menuItem: { key: "Remove", icon: "trash", content: "Remove" },
        render: () => <Remove icons={icons}></Remove>,
      },
      {
        menuItem: { key: "Settings", icon: "setting", content: "Settings" },
        render: () => <Settings icons={icons}></Settings>,
      },
    ];
    return (
      <div className="App">
        <Tab
          menu={{
            color: "orange",
            inverted: false,
            attached: true,
            tabular: false,
            pointing: true,
          }}
          panes={panes}
        />
      </div>
    );
  }
}

export default App;
