import "./App.css";
import React, { useState } from "react";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
function App() {
  let [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    isOpen = !isOpen;
    setIsOpen(isOpen);
  };
  const services = [
    {
      icon: <FaCocktail />,
      title: "free cockTail",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, adipisci!",
    },
    {
      icon: <FaHiking />,
      title: "free Hiking",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, adipisci!",
    },
    {
      icon: <FaShuttleVan />,
      title: "free Shuttle",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, adipisci!",
    },
    {
      icon: <FaBeer />,
      title: "free Beer",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, adipisci!",
    },
  ];
  const [serviceState] = useState(services); // we ignore 2nd para

  return (
    <React.Fragment>
      <Navbar isOpen={isOpen} handleToggle={handleToggle} />
      <Routes>
        {/* exact is showing that path should be exact mean /rooms also contain /, so it can cause runtime bad exp */}
        <Route exact path="/" element={<Home serviceState={serviceState} />} />
        <Route exact path="/rooms/" element={<Rooms />} />
        {/* here slug is variable, you can name it as you want. This is actually a router parameter which decides which unique info to show. */}
        <Route exact path="/rooms/:slug" element={<SingleRoom />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
/*
First of all we installed 2 packages,,
1- react icons
2- react router dom@6

Then we copy the files of the instructor in our project and then simply make pages and using them in app.js.


// game start now... We are going to use the react router and 1st thing

1- import { BrowserRouter as Router } from "react-router-dom"; in index.js and wrap the app component in Router.... We can use this import in app.js beacuse it should be parent but it will get messy. 
2- import { Route, Routes } from "react-router-dom"; in app.js Route is used for routing and we use routes so that if nothing match then run last one whcih is from routes.
3-  You can read its comments above
<React.Fragment>
      <Routes>
       <Route exact path="/" element={<Home />} />
        <Route exact path="/rooms/" element={<Rooms />} />
        <Route exact path="/rooms/:slug" element={<SingleRoom />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </React.Fragment>
    */

/*
    Context API: state management in react which you can say contains all the info which you need throughout the app.
    Steps: 
    1- Create context.js and we create RoomContext there. Which we use to access data in class base mostly like in featureRooms.js
    2- Create provider in which children shows the wrap of context which we create at the top.
    3- Create Consumer which is used to access the data. But in functional based component. We can also use the context for accessing as we did in line no 16 of SingleRoom.js


NOTE: We can access data using the 3 ways in functional component and 1 way in class base as we did in featureRooms.js
      3 ways of functional Component are:
      1- Very preferable way which is using HOOK as we did in SingleRoom.js
      But we should know the other way also so that whenever we face that code so we should understand
      2- Room Consumer as I comment in RoomContainer.js
      3- Using Higher Order Component as I did in RoomContainer.js and in context.js without comment.


    Simply after making this context.js we have more few steps to do:
    1- Go to index.js and wrap the components with Provider which we made in context.js
    Note: This provider you can use above of any compnonent where you need the data from that partivular context. But we need the RoomContext so we make at the very top.
    2- Go in the component where you want to use the data of context. As here I go in the featureRooms.js and i do some steps there also:
        1- static contextType = RoomContext; // contextType is name fixed
        2- Get data using this.context on right side and on left side you can make according to your requirement
    */
