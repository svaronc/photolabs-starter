import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = ({
  photoDetails,
  setPhotoSelected,
  photos,
  favorites,
  updateToFavPhotoIds,
  onClosePhotosDetailsModal,
}) => {
  const similarPhotos = Object.values(photoDetails["similar_photos"]);
  return (
    <div className="photo-details-modal">
      <button
        onClick={() => onClosePhotosDetailsModal()}
        className="photo-details-modal__close-button"
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton
          favorites={favorites}
          updateToFavPhotoIds={updateToFavPhotoIds}
          id={photoDetails.id}
        />
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
            <p className="photo-details-modal__photographer-location">
              {photoDetails.location}
            </p>
          </div>
        </div>
        <h4 className="photo-details-modal__header">Similar photos</h4>
        <div className="photo-details-modal__top-bar">
          <PhotoList
            setPhotoSelected={setPhotoSelected}
            photos={similarPhotos}
            favorites={favorites}
            updateToFavPhotoIds={updateToFavPhotoIds}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
