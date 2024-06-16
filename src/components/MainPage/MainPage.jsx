import React from "react";
import "./MainPage.scss";
import ServerList from "../ServerList/ServerList";

const MainPage = () => {
  return (
    <>
      <div className="main-page">
        <ServerList />
        <div className="main-page--friends-list"></div>
        <div className="main-page--chat-content"></div>
        <div className="main-page--server-users"></div>
      </div>
    </>
  );
};

export default MainPage;
