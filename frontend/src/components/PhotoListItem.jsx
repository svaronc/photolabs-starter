import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ sampleData }) => {
  const { username, id, imageSource, location, profile } = sampleData;
  const locationString = `${location.city}, ${location.country}`;
  
  return (
    <div className="photo-list__item" key={id}>
      <PhotoFavButton/>
      <img className="photo-list__image" src={imageSource} alt="picture" />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={profile}
          alt="profile image"
        />
        <div className="photo-list__user-info">
          <b>{username}</b>
          <p className="photo-list__user-location">{locationString}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
