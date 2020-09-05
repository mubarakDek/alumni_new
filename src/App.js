import React from "react";
import { Router } from "@reach/router";
import About from "./pages/about/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Events from "./pages/events/Events";
import Footer from "./components/Footer";
import NewsPage from "./pages/news/NewsPage";
import Board from "./pages/board/Board";
import Members from "./pages/members/Members";
import Contact from "./pages/contact/Contact";
import Login from "./components/login/Login";
import Success from "./components/success/Success";
import Signup from "./components/signup/Signup";
import Profile from "./pages/profile/Profile";
import SingleNews from "./pages/singleNews/SingleNews";
import SingleEvent from "./pages/singleEvent/SingleEvent";

//context
import UserContextProver from "./context/userContext";

function App() {
  return (
    <>
      <UserContextProver>
        <Navbar />
        <Router>
          <Home path="/" />
          <Events path="/events" />
          <NewsPage path="/news" />
          <Board path="/board" />
          <Members path="/members" />
          <Contact path="/contact" />
          <About path="/about" />
          <Login path="/login" />
          <Success path="/success" />
          <Signup path="/signup" />
          <Profile path="profile" />
          <SingleNews path="singleNews/:id/:imgId" />
          <SingleEvent path="singleEvent/:id/:imgId" />
        </Router>
      </UserContextProver>
      <Footer />
    </>
  );
}

export default App;
