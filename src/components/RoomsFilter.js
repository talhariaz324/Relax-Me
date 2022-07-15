import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";
const getUnique = (item, value) => {
  return [...new Set(item.map((item) => item[value]))]; // Set is use to check the array and add only the unique values not do duplication
};
const RoomsFilter = ({ rooms }) => {
  // sorted Rooms which we pass from RoomContainer.js
  console.log(rooms);
  const context = useContext(RoomContext);
  const {
    handleChange, // direct from value in context.js
    // from state as we are also passing it in value
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;
  let types = getUnique(rooms, "type"); // This will search each room type and get added in types variable here as rooms is array and it has key type
  types = ["all", ...types]; // Above gives us all types except all so we add it like that and ...types are those which we get from above
  console.log(types);
  // Showing each room type in options
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  // Showing each room capacity in options
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <>
      {/* NOTE: state values at first will be default but when we select any filter then it handleChange runs and set the state again with new values and we are using those values then */}
      <section className="filter-container">
        <Title title="search rooms" />
        <form action="" className="filter-form">
          <div className="form-group">
            <label htmlFor="type">room type</label>
            <select
              name="type"
              id="type"
              value={type} // type in state, whatever we get
              className="form-control"
              onChange={handleChange}
            >
              {/* calling options from above */}
              {types}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="capacity">Guests</label>
            <select
              name="capacity"
              id="capacity"
              value={capacity}
              className="form-control"
              onChange={handleChange}
            >
              {/* calling people from above */}
              {people}
            </select>
          </div>
          <div className="form-group">
            {/* Show Price of state  */}
            <label htmlFor="price">room price ${price}</label>
            <input
              type="range"
              name="price"
              min={minPrice}
              max={maxPrice}
              id="price"
              value={price}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">room size </label>
            <div className="size-inputs">
              {/* Show minSize of state  */}
              <input
                type="number"
                name="minSize"
                value={minSize}
                onChange={handleChange}
                className="size-input"
              />
              {/* Show maxSize of state  */}
              <input
                type="number"
                name="maxSize"
                value={maxSize}
                onChange={handleChange}
                className="size-input"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="single-extra">
              {/* Show breakFast of state  */}
              <input
                type="checkbox"
                name="breakfast"
                id="breakfast"
                checked={breakfast}
                onChange={handleChange}
              />
              <label htmlFor="breakfast">breakfast</label>
            </div>
            {/* Show Pets of state  */}
            <div className="single-extra">
              <input
                type="checkbox"
                name="pets"
                checked={pets}
                onChange={handleChange}
              />
              <label htmlFor="breakfast">pets</label>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default RoomsFilter;
