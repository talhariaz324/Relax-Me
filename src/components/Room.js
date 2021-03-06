import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg"; // use if no img found in data
import PropTypes from "prop-types"; // use for checking the types
import { memo } from "react";
const Room = memo(({ room }) => {
  const { name, slug, images, price } = room;
  return (
    <article className="room">
      <div className="img-container">
        {/* in jsx, if image[0] is not found then show the default img */}
        <img src={images[0] || defaultImg} alt="" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        {/* in routes, we set it as slug variable and here we are getting the single room info and its slug ehich we use to show its details */}
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
});

export default Room;
// PropTypes are simply a mechanism that ensures that the passed value is of the correct datatype. This makes sure that we don't receive an error at the very end of our app by the console which might not be easy to deal with.
Room.propTypes = {
  room: PropTypes.shape({
    // as have only one prop so we are checking its types
    name: PropTypes.string.isRequired, // accessing name
    slug: PropTypes.string.isRequired, // slug
    images: PropTypes.arrayOf(PropTypes.string).isRequired, // images
    price: PropTypes.number.isRequired, // price
  }),
};
