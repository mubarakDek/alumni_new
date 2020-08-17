import React from "react";

const userContext = React.createContext({
  loggedInUser: "",
  isLoggedIn: false,
  userDat: {},
}); // Create a context object

export {
  userContext, // Export it so it can be used by other Components
};
