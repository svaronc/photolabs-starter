import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({topics, photos, setVisible}) => {
  const [favorites, setFavorites] = useState([]);
  return (
    <div className="home-route">
      <TopNavigation topics = {topics} favorites = {favorites} />
      <PhotoList setVisible={setVisible} photos = {photos} favorites = {favorites} setFavorites = {setFavorites}/>
    </div>
  );
};

export default HomeRoute;
