import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({topics, photos, setVisible,setPhotoDetails, favorites, setFavorites}) => {
  return (
    <div className="home-route">
      <TopNavigation topics = {topics} favorites = {favorites} />
      <PhotoList setPhotoDetails = {setPhotoDetails} setVisible={setVisible} photos = {photos} favorites = {favorites} setFavorites = {setFavorites}/>
    </div>
  );
};

export default HomeRoute;
