import React from "react";
import Switch from '@mui/material/Switch';
import "./TopNavigationBar.scss";
import TopicList from "../TopicList/TopicList";
import FavBadge from "../FavBadge/FavBadge";
import { SearchBar } from "../SearchBar/SearchBar";
import DarkSwitch from '../DarkSwitch/DarkSwitch'

const TopNavigation = ({
  topics,
  favorites,
  onSetTopic,
  onClickFavBadge,
  onSearch,
  searchValue,
  onToggleMode,
  theme
}) => {
  return (
    <div className="top-nav-bar">
      <a className="top-nav-bar__logo" href="/">
        PhotoLabs
      </a>
      <SearchBar onSearch={onSearch} searchValue ={searchValue}/>
      <TopicList topics={topics} onSetTopic={onSetTopic} />
      <DarkSwitch theme = {theme} onToggleMode={onToggleMode}/>
      {favorites.length <= 0 ? (
        <FavBadge
          onClickFavBadge={onClickFavBadge}
          isFavPhotoExist={false}
          selected={false}
        />
      ) : (
        <FavBadge
          onClickFavBadge={onClickFavBadge}
          isFavPhotoExist={true}
          selected={true}
        />
      )}
    </div>
  );
};

export default TopNavigation;
