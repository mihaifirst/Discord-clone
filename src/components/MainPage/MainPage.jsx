import React from "react";
import "./MainPage.scss";
import FriendsList from "../FriendsList/FriendsList";

const MainPage = () => {
  return (
    <>
      <div className="main-page">
        <div className="main-page--server-list"></div>
        <FriendsList />
        <div className="main-page--chat-content"></div>
        <div className="main-page--server-users"></div>
      </div>
    </>
  );
};

export default MainPage;
