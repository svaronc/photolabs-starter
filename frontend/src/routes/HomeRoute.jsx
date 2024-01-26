import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({topics, photos,setPhotoSelected, favorites, updateToFavPhotoIds}) => {
  return (
    <div className="home-route">
      <TopNavigation topics = {topics} favorites = {favorites} />
      <PhotoList setPhotoSelected={setPhotoSelected} photos = {photos} favorites = {favorites} updateToFavPhotoIds = {updateToFavPhotoIds}/>
    </div>
  );
};

export default HomeRoute;
