import React, { Component } from "react";
import { Item, Image, Header, Popup, Button, Icon } from "semantic-ui-react";
export class RemoveContest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      end_time: this.props.end_time,
      site: this.props.site,
      iconVisible: false,
    };
  }
  addContest(event, url) {
    // setter
    localStorage.removeItem(url);
    // getter
    // console.log(localStorage.getItem(url));
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
                  name="add"
                  color="blue"
                  size="large"
                  onClick={(event) => this.addContest(event, this.props.url)}
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

export default RemoveContest;
