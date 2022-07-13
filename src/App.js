import "./App.css";
import React from "react";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      <Routes>
        {/* exact is showing that path should be exact mean /rooms also contain /, so it can cause runtime bad exp */}
        <Route exact path="/" element={<Home />} />
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
