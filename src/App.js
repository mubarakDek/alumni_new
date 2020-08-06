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
import Signup from "./components/signup/Signup";
import SingleNews from "./pages/singleNews/singleNews";
import AccountDropdown from "./components/accountDropdown/Account";
import ChangePass from "./components/changePassword/ChangePass";
function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Home path="/" />
        <Events path="/events" />
        <NewsPage path="/newspage" />
        <Board path="/board" />
        <Members path="/members" />
        <Contact path="/contact" />
        <About path="/about" />
        <Login path="/login" />
        <Signup path="/signup" />
        <ChangePass path="/changepass" />
      </Router>
      <Footer />
    </>
  );
}

export default App;
