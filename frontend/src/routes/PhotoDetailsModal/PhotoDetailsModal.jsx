import React from "react";

import "./PhotoDetailsModal.scss";
import closeSymbol from "/home/svaronc/lighthouse/photolabs-starter/frontend/src/assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton/PhotoFavButton";
import PhotoList from "components/PhotoList/PhotoList";

const PhotoDetailsModal = ({
  photoDetails,
  setPhotoSelected,
  favorites,
  updateToFavPhotoIds,
  onClosePhotosDetailsModal,
  photos
}) => {
  // const similarPhotos = Object.values(photoDetails["similar_photos"]);
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
          id={photoDetails[0].id}
          user={photoDetails[0].user}
          urls={photoDetails[0].urls}
          location={photoDetails[0].location}
          similar_photos={photoDetails[0]["similar_photos"]}
        />
        <img
          className="photo-details-modal__image"
          src={photoDetails[0].urls.full}
          alt="picture"
        />
        <div className=" photo-details-modal__photographer-details">
          <img
            className="photo-details-modal__photographer-profile"
            src={photoDetails[0].user.profile}
            alt="profile image"
          />
          <div className="photo-details-modal__photographer-info">
            <b>{photoDetails[0].user.username}</b>
            <p className="photo-details-modal__photographer-location">
              {`${photoDetails[0].location.city} ${photoDetails[0].location.country}  `}
            </p>
          </div>
        </div>
        <h4 className="photo-details-modal__header">Similar photos</h4>
        <div className="photo-details-modal__top-bar">
          <PhotoList
            setPhotoSelected={setPhotoSelected}
            photos={photoDetails[0]["similar_photos"]}
            favorites={favorites}
            updateToFavPhotoIds={updateToFavPhotoIds}
            fullPhotoData = {photos}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
