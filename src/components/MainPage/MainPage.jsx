import React from "react";
import "./MainPage.scss";
import FriendsList from "../FriendsList/FriendsList";
import ServerList from "../ServerList/ServerList";

const MainPage = () => {
  return (
    <>
      <div className="main-page">
        <ServerList />
        <FriendsList />
        <div className="main-page--chat-content"></div>
        <div className="main-page--server-users"></div>
      </div>
    </>
  );
};

export default MainPage;
