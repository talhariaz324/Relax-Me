import React from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";
class FeaturedRooms extends React.Component {
  static contextType = RoomContext; // should be same variable name always
  render() {
    let { loading, featuredRooms: rooms } = this.context; // Destructing object with same name as in previous file
    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />; // in array, giving key is necesaary
    });
    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}

export default FeaturedRooms;
