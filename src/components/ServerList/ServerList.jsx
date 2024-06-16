import React from "react";
import "./ServerList.scss";
import discord from "../../assets/images/discord-icon.png";
import javascript_logo from "../../assets/images/javascript-logo.svg";
import pants from "../../assets/images/pants.jpg";
import fruits from "../../assets/images/fruits.jpg";
import cat from "../../assets/images/cat.jpg";
import mountain from "../../assets/images/mountain.jpg";
import pen from "../../assets/images/pen.jpg";
import download from "../../assets/images/download.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faGear } from "@fortawesome/free-solid-svg-icons";

const ServerList = () => {
  return (
    <div className="server-list">
      <div className="server-list--discord">
        <img src={discord} />
      </div>
      <div className="server-list--line"></div>
      <div className="server-list--user">
        <img src={javascript_logo} />
        <span>1</span>
      </div>
      <div className="server-list--user">
        <img src={pants} />
        <span>5</span>
      </div>
      <div className="server-list--user">
        <img src={fruits} />
      </div>
      <div className="server-list--user">
        <img src={cat} />
      </div>
      <div className="server-list--user">
        <img src={mountain} />
      </div>
      <div className="server-list--user">
        <img src={pen} />
      </div>
      <div className="server-list--add-server">
        <FontAwesomeIcon icon={faPlus} />
      </div>
      <div className="server-list--add-server">
        <FontAwesomeIcon icon={faGear} />
      </div>
      <div className="server-list--download-data">
        <img src={download} />
      </div>
    </div>
  );
};

export default ServerList;
