
import React, { Component } from "react";
import { Item, Image, Header,Popup,Button, Icon } from "semantic-ui-react";
export class Contest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      end_time: this.props.end_time,
      site: this.props.site,
      iconVisible: false,
    };
  }
  removeContest(event,url) {
    // setter
    localStorage.setItem(url, url);
    // getter
    console.log(localStorage.getItem(url));
    this.props.handleRefresh();
  }
  render() {
    var date = new Date(this.props.end_time);
    var d =
      date.getDate() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      date.getFullYear() +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes();
    // console.log(this.state.site)
    // var site = this.state.site;
    // console.log(site)
    // var img = "CodeForces"
    // const object = {
    //   CodeForces: "codeforces.png",
    //   CodeChef: "codechef.png",
    // };

    // console.log(mapImage.get("CodeForces"))//this is giving codeforces.png as output
    // var site = this.state.site;
    // console.log(mapImage.get(site));
    // var fsite = mapImage.get(site);
    // var srcsite = "../assets/" + fsite;
    // console.log(srcsite)
    // console.log(mapImage.get(this.props.name)); //this is giving undefined
    // console.log(Object.entries(object)[0][0]); //this is giving error
    var icons = this.props.icons;
    return (
      <Item.Group
        relaxed
        style={{ border: "1px solid grey" }}
        onMouseEnter={() => this.setState({ iconVisible: true })}
        onMouseLeave={() => this.setState({ iconVisible: false })}
      >
        <Item>
          <Item.Image
            size="tiny"
            src={icons[this.props.site]}
            alt={this.props.site}
          />
          <Item.Content verticalAlign="middle">
            <Item.Header as="a" href={this.props.url}>
              {this.props.name}
            </Item.Header>
            <Item.Description>
              Site : {this.props.site} | Ends at : {d}
            </Item.Description>
            <Item.Description style={{ color: "green" }}>

              Status : {this.props.status}
            </Item.Description>
            <Item.Extra>
              {this.state.iconVisible && (
                <Icon
                  floated="right"
                  link
                  name="trash alternate outline"
                  color="red"
                  size="large"
                  onClick={(event) => this.removeContest(event, this.props.url)}
                  style={{ marginLeft: "100px" }}
                />
              )}
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    );
  }
}

export default Contest;
