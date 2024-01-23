import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ sampleData }) => {
  const { username, id, imageSource, location, profile } = sampleData;
  const locationString = `${location.city}, ${location.country}`;

  return (
    <div className="photo-list__item" key={id}>
      <img className="photo-list__image" src={imageSource} alt="picture" />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={profile}
          alt="profile image"
        />
        <h4 className="photo-list__user-info">
          {username} <br />{" "}
          <span className="photo-list__user-location"> {locationString}</span>
        </h4>
      </div>
    </div>
  );
};

export default PhotoListItem;
