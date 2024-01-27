import React from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = ({ topics, favorites, onSetTopic, onClickFavBadge }) => {
  return (
    <div className="top-nav-bar">
      <a className="top-nav-bar__logo" href = "/">PhotoLabs</a>
      <TopicList topics={topics} onSetTopic = {onSetTopic}/>
      {favorites.length <= 0 ? (
        <FavBadge  onClickFavBadge = {onClickFavBadge} isFavPhotoExist={false} selected = {false}/>
      ) : (
        <FavBadge  onClickFavBadge = {onClickFavBadge} isFavPhotoExist={true} selected = {true}/>
      )}
    </div>
  );
};

export default TopNavigation;

