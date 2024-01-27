import React from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = ({ topics, favorites, onSetTopic }) => {
  return (
    <div className="top-nav-bar">
      <a className="top-nav-bar__logo" href = "/">PhotoLabs</a>
      <TopicList topics={topics} onSetTopic = {onSetTopic}/>
      {favorites.length <= 0 ? (
        <FavBadge isFavPhotoExist={false} selected = {false}/>
      ) : (
        <FavBadge isFavPhotoExist={true} selected = {true}/>
      )}
    </div>
  );
};

export default TopNavigation;

