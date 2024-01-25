import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = ({ setVisible, photoDetails, setPhotoDetails }) => {
  console.log("log props details>>>", photoDetails);
  const hanldleCloseButton = () => {
    setVisible(false);
    setPhotoDetails({});
    console.log(photoDetails);
  };
  return (
    <div className="photo-details-modal">
      <button
        onClick={hanldleCloseButton}
        className="photo-details-modal__close-button"
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <img
          className="photo-details-modal__image"
          src={photoDetails.url}
          alt="picture"
        />
      </div>

      <div className="photo-details-modal__photographer-details">
        <img
          className="photo-details-modal__photographer-profile"
          src={photoDetails.profile}
          alt="profile image"
        />
        <div className="photo-details-modal__photographer-info">
          <b>{photoDetails.username}</b>
          <p className="photo-list__user-location">{photoDetails.location}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
