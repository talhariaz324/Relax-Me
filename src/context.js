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
    // For Filter Values
    type: "all", // By Default all
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    pets: false,
    breakfast: false,
  };

  // we are doing all this things because when our data will coming from the backend contentful which we will not use now then it need us to format it like that
  // componentDidMount do the same work as useEffect in functioanl base component.

  componentDidMount() {
    let rooms = this.formatData(items); // getting from import
    console.log(rooms);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(...rooms.map((item) => item.price)); // We need these to fix the values in filteration by default to max or min according to data
    let minPrice = Math.min(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((item) => item.size));
    let minSize = Math.min(...rooms.map((item) => item.size));
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice, // set price to max as we need it in filteration
      maxPrice, // These means that maxPrice: maxPrice means state ki value update ho jay gi hmarai max sa
      minPrice,
      maxSize,
      minSize,
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

  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room) => room.slug === slug); // find method is used to get the first matched value and return object. While filter method finds all the matched values and return array.
    return room;
  };
  //  Function which is handling all filtering
  handleChange = (event) => {
    // calling this function on every filter option... SO this event changes according to it
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value; // If we have checkBox then target should be checked otherwise value
    const name = target.name; // name of target like type i set in filter.js etc.
    console.log(name, value); // type (name) single (value) --> single is actually type of room

    this.setState(
      {
        [name]: value, // This will do type: single OR capacity: 2 ok ok
      },
      this.filterRooms // callBack function which we use to filter according to our need
    );
  };
  filterRooms = () => {
    let { rooms, type, capacity, price, maxSize, minSize, breakfast, pets } =
      this.state; // we destruct the state
    let tempRooms = [...rooms]; // we store the copy of rooms in tempRoom
    capacity = parseInt(capacity); // making capacity as int
    // filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type); // if all then show all as we do in line no 110
    }
    // filter by guests
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity); // if 1 then show all
    }
    // filter by price
    tempRooms = tempRooms.filter((room) => room.price <= price); // show rooms whose price less than or equal to state
    //filter by size
    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize // rooms whose size greater and equal to min and less and equal to maxsize
    );
    //filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true); // if breakFast is true in state then show that room who have breakfast true
    }
    //filter by pets
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true); // if pets are true then show those room who have pet true
    }
    this.setState({
      sortedRooms: tempRooms, // sortedRoom are setted to the tempRooms
    });
  };
  render() {
    return (
      // passing state object like this
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange, // passing handle function
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
const RoomConsumer = RoomContext.Consumer;
// Higher Order Component for accessing as i did in roomContainer.js
export function withRoomConsumer(Component) {
  // function taking component
  return function consumerWrapper(props) {
    // nested function which take props if component have
    return (
      <RoomConsumer>
        {/* here same as RoomConsumer syntax but here context is necessary and it can be any name as u wnat */}
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}
export { RoomProvider, RoomConsumer, RoomContext }; // remove default as it is not allow to export thr RoomContext
