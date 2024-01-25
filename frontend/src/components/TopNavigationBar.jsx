import React from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = ({ topics, globalState }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} />
      {globalState.length <= 0 ? (
        <FavBadge isFavPhotoExist={false} />
      ) : (
        <FavBadge isFavPhotoExist={true} />
      )}
    </div>
  );
};

export default TopNavigation;
