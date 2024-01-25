import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({topics, photos}) => {
  const [globalState, setGlobalState] = useState([]);
  return (
    <div className="home-route">
      <TopNavigation topics = {topics} globalState = {globalState} />
      <PhotoList photos = {photos} globalState = {globalState} setGlobalState = {setGlobalState}/>
    </div>
  );
};

export default HomeRoute;
