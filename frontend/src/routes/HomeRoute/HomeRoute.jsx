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
  onSearch,
  searchItems,
  searchValue,
  onToggleMode,
  theme
}) => {
  return (
    <div className="home-route">
      <TopNavigation
      theme ={theme}
      onToggleMode ={onToggleMode}
        searchValue ={searchValue}
        topics={topics}
        favorites={favorites}
        onSetTopic={onSetTopic}
        onClickFavBadge = {onClickFavBadge}
        onSearch ={ onSearch}
      />
      <PhotoList
        setPhotoSelected={setPhotoSelected}
        photos={searchItems}
        favorites={favorites}
        updateToFavPhotoIds={updateToFavPhotoIds}
        loading = {loading}
      />
    </div>
  );
};

export default HomeRoute;
