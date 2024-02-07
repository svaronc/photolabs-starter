import React, { useState } from "react";

import "./HomeRoute.scss";
import TopNavigation from "components/TopNavigationBar/TopNavigationBar";
import PhotoList from "components/PhotoList/PhotoList";

const HomeRoute = ({
  topics,
  photos,
  setPhotoSelected,
  favorites,
  updateToFavPhotoIds,
  onSetTopic,
  onClickFavBadge,
  loading,
}) => {
  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        favorites={favorites}
        onSetTopic={onSetTopic}
        onClickFavBadge = {onClickFavBadge}
      />
      <PhotoList
        setPhotoSelected={setPhotoSelected}
        photos={photos}
        favorites={favorites}
        updateToFavPhotoIds={updateToFavPhotoIds}
        loading = {loading}
      />
    </div>
  );
};

export default HomeRoute;
