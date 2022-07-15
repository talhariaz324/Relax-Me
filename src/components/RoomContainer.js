import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomList.js";
import { withRoomConsumer } from "../context";
import { RoomConsumer } from "../context";
import Loading from "./Loading";
/*
Create function of RoomContainer and give this to function named as withRoomConsumer as we import it.
*/
function RoomContainer({ context }) {
  // This context actually the coming from the context.js and it has actual state value which we have in context.js
  const { loading, sortedRooms, rooms } = context; // Destructing
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      {/* Drilling  */}
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}
export default withRoomConsumer(RoomContainer); // Here passing our component to which we want data

// const RoomsContainer = () => {
//   return (
//     <RoomConsumer> // wrap with consumer
//       {(value) => { // take function
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <>
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} />
//           </>
//         );
//       }}
//     </RoomConsumer> // wrap with consumer
//   );
// };

// export default RoomsContainer; // export it
