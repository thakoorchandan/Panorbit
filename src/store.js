import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./pages/landingPage/usersSlice";
import singleUserSlice from "./pages/profilePage/singleUserSlice";

// Redux Store to maintain application state
const store = configureStore({
  reducer: {
    activeUser: singleUserSlice, // Maintains state of ActiveUsers
    users: usersSlice, // Maintains state of Users
  },
});

export default store;
