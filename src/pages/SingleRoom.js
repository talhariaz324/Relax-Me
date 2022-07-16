import React, { useState, useContext } from "react"; // hook
import defaultImg from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import { useParams } from "react-router-dom";
import StyledHero from "../components/StyledHero";
// NOTE: If you still want to know how to use context API in class based, you can check the feature.js
const SingleRoom = () => {
  const { slug } = useParams(); // from import we can get in function based
  const [state, setState] = useState({
    // here setState has no use so u can remove it
    // use the useState for making object and accessing in line no 15
    slug: slug,
  });
  let { getRoom } = useContext(RoomContext); // Reciving getRoom function by hook

  const room = getRoom(state.slug); // passing slug

  if (!room) {
    // if there is no room then show that else show our room
    return (
      <div className="error">
        <h3> no such room could be found...</h3>
        <Link to="/rooms" className="btn-primary">
          back to rooms
        </Link>
      </div>
    );
  }
  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;
  const [mainImg, ...remainingImgs] = images; // Destructing array for getting rid of first one image which is in hero and show remaining in the below
  return (
    <>
      {/* call styledHero for dynamic images */}
      <StyledHero img={mainImg || defaultImg}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {remainingImgs.map((img, index) => {
            return <img src={img} alt="" key={index} />;
          })}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price: ${price}</h6>
            {/* // square feet */}
            <h6>size: ${size} SQFT</h6>
            <h6>
              max capacity : {/* simple diffrence of people and person */}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            {/* pets are true then allow otherwise not */}
            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
            {/* if property of breakfast then show otherwise not show /// its also a method to show and hide */}
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extra</h6>
        <ul className="extras">
          {extras.map((item, index) => {
            return <li key={index}>-{item}</li>; // showing each extras
          })}
        </ul>
      </section>
    </>
  );
};
export default SingleRoom;
