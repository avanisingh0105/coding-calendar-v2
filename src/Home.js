import React, { Component } from "react";
import Contest from "./Contest";
import { Header,Segment } from "semantic-ui-react";
import Upcoming from "./Upcoming";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: "false",
      contests: [],
      refresh: "false",
      
    };
  }
  componentDidMount() {
    fetch("https://kontests.net/api/v1/all")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ isLoaded: true, contests: json });
      });
  }

  render() {
    if (!this.state.isLoaded) {
      return <div>Loading data...</div>;
    } else {
      this.state.contests.sort((a, b) => {
        return new Date(a.end_time) - new Date(b.end_time); // descending
      });
      return (
        <div style={{ padding: "3px" }}>
          {/* <Segment inverted> */}
          <Header as="h2" block inverted color="red">
            LIVE CONTESTS
          </Header>

          {this.state.contests.map(
            (contest) =>
             localStorage.getItem(contest.url)===null  &&contest.status === "CODING" && (
                <Contest
                  key={contest.url}
                  site={contest.site}
                  name={contest.name}
                  url={contest.url}
                  status={contest.status}
                  end_time={contest.end_time}
                  icons={this.props.icons}
                  contests={this.state.contests}
                  // removeContest={this.removeContest(contest.url)}
                  handleRefresh={()=>this.setState({refresh:true})}
                />
              )
          )}
          <Header as="h2" block inverted color="red">
            UPCOMING CONTESTS
          </Header>
          {this.state.contests.map(
            (contest) =>
              contest.status === "BEFORE" && (
                <Upcoming
                  key={contest.url}
                  site={contest.site}
                  name={contest.name}
                  url={contest.url}
                  status={contest.status}
                  icons={this.props.icons}
                  // removeContest={this.removeContest}
                />
              )
          )}
          {/* </Segment> */}
        </div>
      );
    }
  }
}

export default Home;
