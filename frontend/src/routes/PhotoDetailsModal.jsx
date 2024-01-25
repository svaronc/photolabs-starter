import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = ({ setVisible, photoDetails, setPhotoDetails, photos, favorites, setFavorites}) => {
  const hanldleCloseButton = () => {
    setVisible(false);
    setPhotoDetails({});
    console.log(photoDetails);
  };
  const similarPhotos =  Object.values(photoDetails['similar_photos'])
  return (
    <div className="photo-details-modal">
      <button
        onClick={hanldleCloseButton}
        className="photo-details-modal__close-button"
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
      <PhotoFavButton favorites = {favorites} setFavorites = {setFavorites} id = {photoDetails.id}/>
        <img
          className="photo-details-modal__image"
          src={photoDetails.url}
          alt="picture"
        />
        <div className=" photo-details-modal__photographer-details">
        <img
          className="photo-details-modal__photographer-profile"
          src={photoDetails.profile}
          alt="profile image"
        />
        <div className="photo-details-modal__photographer-info">
          <b>{photoDetails.username}</b>
          <p className="photo-details-modal__photographer-location">{photoDetails.location}</p>
        </div>
      </div>
      <h4 className="photo-details-modal__header">Similar photos</h4>
      <div className="photo-details-modal__top-bar">
          <PhotoList setPhotoDetails = {setPhotoDetails}  photos = {similarPhotos} favorites = {favorites} setFavorites = {setFavorites}/>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
