import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({
  sampleData,
  favorites,
  updateToFavPhotoIds,
  setPhotoSelected,
}) => {
  const { user, id, urls, location, similar_photos } = sampleData;
  const locationString = `${location.city}, ${location.country}`;

  return (
    <div className="photo-list__item" key={id}>
      <PhotoFavButton
        favorites={favorites}
        updateToFavPhotoIds={updateToFavPhotoIds}
        id={id}
      />
      <img
        onClick={() => {
          setPhotoSelected(id, user, urls, locationString, similar_photos);
        }}
        className="photo-list__image"
        src={urls.regular}
        alt="picture"
      />
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
