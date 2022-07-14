import React from "react";
const RoomContext = React.createContext(); // This is context api created. And we can use it.
/* 
Two terms: 
1) Provider ===> This will wrap the all components as we do this in the index.js
2) Consumer ===> Which is use for accessing the data

// here we name the class roomProvider because we are going to store data all related to room in this and the access.
*/

class RoomProvider extends React.Component {
  state = {
    // greeting: "Hello",
    // name: "Feature",
  };
  render() {
    return (
      // passing state object like this
      <RoomContext.Provider value={{ someKey: "Hello" }}>
        {this.props.childern}
      </RoomContext.Provider>
    );
  }
}
const RoomConsumer = RoomContext.Consumer;
export { RoomProvider, RoomConsumer, RoomContext }; // remove default as it is not allow to export thr RoomContext
