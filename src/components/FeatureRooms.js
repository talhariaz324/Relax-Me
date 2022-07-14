import React from "react";
import { RoomContext } from "../context";
class FeaturedRooms extends React.Component {
  static contextType = RoomContext; // should be same variable name always
  render() {
    const value = this.context; // This will get the value of provider which is currently hello
    console.log(value);
    return <div className=""> I am from the feature Room</div>;
  }
}

export default FeaturedRooms;
