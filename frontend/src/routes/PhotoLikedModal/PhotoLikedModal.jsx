import React from "react";

import "../PhotoDetailsModal/PhotoDetailsModal";
import closeSymbol from "/home/svaronc/lighthouse/photolabs-starter/frontend/src/assets/closeSymbol.svg";
import PhotoList from "components/PhotoList/PhotoList";

const PhotoLikedModal = ({
  photoDetails,
  setPhotoSelected,
  photos,
  favorites,
  updateToFavPhotoIds,
  onClosePhotosDetailsModal,
  onLikedPhotos,
}) => {
  return (
    <div className="photo-details-modal">
      <button
        onClick={() => onClosePhotosDetailsModal()}
        className="photo-details-modal__close-button"
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {favorites.length <= 0 && (
        <div className="photo-details-modal__not-likes">
          <h2>Dont Have Liked Photos</h2>
            <img
              src="https://cdn-icons-png.flaticon.com/128/5777/5777915.png"
              loading="lazy"
              alt="Broken heart "
              title="Broken heart "
              width="64"
              height="64"
            />
        </div>
      )}
      <PhotoList
        photos={photoDetails}
        favorites={favorites}
        setPhotoSelected={setPhotoSelected}
        updateToFavPhotoIds={updateToFavPhotoIds}
        onLikedPhotos={onLikedPhotos}
      />
    </div>
  );
};

export default PhotoLikedModal;
