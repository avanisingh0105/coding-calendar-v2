import React, { Component } from "react";
import { Item, Image } from "semantic-ui-react";
export class Upcoming extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: this.props.name,
    };
  }
  render() {
  var icons = this.props.icons;
    return (
      <Item.Group>
        <Item>
          <Item.Image
            size="tiny"
           src={icons[this.props.site]}
          />

          <Item.Content>
            <Item.Header as="a" href={this.props.url}>
              {this.props.name}
            </Item.Header>

            <Item.Description>Site : {this.props.site}</Item.Description>
            <Item.Extra style={{ color: "skyblue" }}>
              Status : {this.props.status}
            </Item.Extra>
          </Item.Content>
          
        </Item>
      </Item.Group>
    );
  }
}

export default Upcoming;
