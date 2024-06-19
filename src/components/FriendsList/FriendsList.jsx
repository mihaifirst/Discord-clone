import React from "react";
import "./FriendsList.scss";
import friends from "../../assets/images/friends.svg";
import shop from "../../assets/images/shop.svg";
import nitro from "../../assets/images/nitro.svg";
import message from "../../assets/images/message.svg";
import plus from "../../assets/images/plus.svg";
import random_image from "../../assets/images/random-image.jpg";
import random_image_2 from "../../assets/images/random-image-2.jpg";
import random_image_3 from "../../assets/images/random-image-3.jpg";
import close from "../../assets/images/close.svg";
import microphone from "../../assets/images/microphone.svg";
import headphones from "../../assets/images/headphones.svg";
import settings from "../../assets/images/settings.svg";

const FriendsList = () => {
  return (
    <div className="friends-list">
      <div className="friends-list--input">
        <input
          type="text"
          placeholder="Find or start a conversation"
          className="conversation"
        />
      </div>

      <div className="friends-list--menu">
        <div className="friends-list--menu--item">
          <div className="friends-list--menu--item--icon">
            <img src={friends} />
          </div>
          <span className="friends-list--menu--item--text">Friends</span>
        </div>
        <div className="friends-list--menu--item">
          <div className="friends-list--menu--item--icon">
            <img src={nitro} />
          </div>
          <span className="friends-list--menu--item--text">Nitro</span>
        </div>
        <div className="friends-list--menu--item">
          <div className="friends-list--menu--item--icon">
            <img src={message} />
          </div>
          <span className="friends-list--menu--item--text">
            Message Requests
          </span>
        </div>
        <div className="friends-list--menu--item">
          <div className="friends-list--menu--item--icon">
            <img src={shop} />
          </div>
          <span className="friends-list--menu--item--text">Shop</span>
        </div>
      </div>
      <div className="friends-list--direct--messages">
        <span>Direct Messages</span>
        <div className="friends-list--direct--messages--icon">
          <img src={plus} />
        </div>
      </div>
      <div className="friends-list--messages">
        <div className="friends-list--messages--user">
          <div className="profile-image">
            <img src={random_image} />
          </div>
          <span className="friends-list--messages--user--name">Andrei</span>
          <div className="friends-list--messages--user--icon">
            <img src={close} />
          </div>
        </div>
        <div className="friends-list--messages--user">
          <div className="profile-image">
            <img src={random_image_2} />
          </div>
          <span className="friends-list--messages--user--name">Marian</span>
          <div className="friends-list--messages--user--icon">
            <img src={close} />
          </div>
        </div>
        <div className="friends-list--messages--user">
          <div className="profile-image">
            <img src={random_image_3} />
          </div>
          <span className="friends-list--messages--user--name">Andreea</span>
          <div className="friends-list--messages--user--icon">
            <img src={close} />
          </div>
        </div>
      </div>
      <div className="friends-list--user-info">
        <div className="friends-list--user-info--container">
          <div className="profile-image">
            <img src={random_image} />
          </div>
          <div className="friends-list--user-info--username-status">
            <span className="username">Alexandru</span>
            <span className="status">Online</span>
          </div>
        </div>
        <div className="icon">
          <img src={microphone} />
        </div>
        <div className="icon">
          <img src={headphones} />
        </div>
        <div className="icon">
          <img src={settings} />
        </div>
      </div>
    </div>
  );
};

export default FriendsList;
