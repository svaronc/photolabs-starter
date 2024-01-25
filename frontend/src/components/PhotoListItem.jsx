import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ sampleData , globalState, setGlobalState}) => {
  const { user, id, urls, location } = sampleData;
  const locationString = `${location.city}, ${location.country}`;
  
  return (
    <div className="photo-list__item" key={id}>
      <PhotoFavButton globalState = {globalState} setGlobalState = {setGlobalState}/>
      <img className="photo-list__image" src={urls.regular} alt="picture" />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={user.profile}
          alt="profile image"
        />
        <div className="photo-list__user-info">
          <b>{user.username}</b>
          <p className="photo-list__user-location">{locationString}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
