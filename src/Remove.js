import React, { Component } from 'react'
import { Header, Segment } from "semantic-ui-react";
import RemoveContest from './RemoveContest';
export class Remove extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: "false",
      contests: [],
    //   refresh: "false",
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
      return (
        <div style={{ padding: "3px" }}>
          {/* <Segment inverted> */}
          <Header as="h2" block inverted color="red">
            REMOVED CONTESTS
          </Header>

          {this.state.contests.map(
            (contest) =>
              localStorage.getItem(contest.url) &&(
                <RemoveContest
                  key={contest.url}
                  site={contest.site}
                  name={contest.name}
                  url={contest.url}
                  status={contest.status}
                  end_time={contest.end_time}
                  icons={this.props.icons}
                  contests={this.state.contests}
                  // removeContest={this.removeContest(contest.url)}
                //   handleRefresh={() => this.setState({ refresh: true })}
                />
              )
          )}
          
          {/* </Segment> */}
        </div>
      );
  }
}

export default Remove
