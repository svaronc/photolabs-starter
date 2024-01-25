import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ sampleData , favorites, setFavorites, setVisible}) => {
  const { user, id, urls, location } = sampleData;
  const locationString = `${location.city}, ${location.country}`;
  const handlePhotoClick = () => {
    setVisible(prev => !prev);
  }
  return (
    <div className="photo-list__item" key={id}>
      <PhotoFavButton favorites = {favorites} setFavorites = {setFavorites} id = {id}/>
      <img onClick={handlePhotoClick} className="photo-list__image" src={urls.regular} alt="picture" />
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
