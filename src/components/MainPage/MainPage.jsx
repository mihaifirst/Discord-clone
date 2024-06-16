import React from "react";
import "./MainPage.scss";

const MainPage = () => {
  return (
    <>
      <div className="main-page">
        <div className="main-page--server-list"></div>
        <div className="main-page--friends-list"></div>
        <div className="main-page--chat-content"></div>
        <div className="main-page--server-users"></div>
      </div>
    </>
  );
};

export default MainPage;
