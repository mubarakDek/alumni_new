import React, { useReducer } from "react";

const reducer = (state, action) => {
  let newState;

  switch (action.type) {
    case "LOGIN":
      newState = { ...state, isLoggedIn: true, ...action.payload };
      // save state to SessionStroge
      sessionStorage.setItem("userData", JSON.stringify(newState));
      //navigate to profile
      // return state
      return newState;

    case "LOGOUT":
      // set login to false
      newState = { ...state, isLoggedIn: false };
      // remove state from SessionStroge
      sessionStorage.removeItem("userData");
      //navigate to profile
      // return state
      return newState;

    case "ENABLE-DARK-MODE":
      newState = { ...state, isLoggedIn: false };
      return state;

    case "DISABLE-DARK-MODE":
      newState = { ...state, isLoggedIn: false };
      return state;

    default:
      return state;
  }
};

const initialState = {
  isLoggedIn: false,
};

const UserContext = React.createContext();

export default function MyContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext };
