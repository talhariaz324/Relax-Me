import React from "react";
import items from "./data";
const RoomContext = React.createContext(); // This is context api created. And we can use it.
/* 
Two terms: 
1) Provider ===> This will wrap the all components as we do this in the index.js
2) Consumer ===> Which is use for accessing the data

// here we name the class roomProvider because we are going to store data all related to room in this and the access.
*/

class RoomProvider extends React.Component {
  state = {
    rooms: [], // all rooms
    sortedRooms: [], // filtered
    featuredRooms: [], // featured rooms in home
    loading: true, // this will show when internet is slow
  };
  // we are doing all this things because when our data will coming from the backend contentful which we will not use now then it need us to format it like that
  // componentDidMount do the same work as useEffect in functioanl base component.
  componentDidMount() {
    let rooms = this.formatData(items); // getting from import
    console.log(rooms);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
    });
  }

  formatData = (items) => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id }; // images will replace with our images amd id will be added in single room
      return room;
    });
    return tempItems;
  };

  render() {
    return (
      // passing state object like this
      <RoomContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
const RoomConsumer = RoomContext.Consumer;
export { RoomProvider, RoomConsumer, RoomContext }; // remove default as it is not allow to export thr RoomContext
