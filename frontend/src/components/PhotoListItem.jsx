import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({
  sampleData,
  favorites,
  updateToFavPhotoIds,
  setPhotoSelected,
  fullPhotoData,
}) => {
  const { user, id, urls, location, similar_photos } = sampleData;
  const dataForPhotoId = fullPhotoData
    ? fullPhotoData.find((item) => item.id === id)
    : null;
  return (
    <div className="photo-list__item" key={id}>
      {similar_photos !== undefined ? (
        <PhotoFavButton
          favorites={favorites}
          updateToFavPhotoIds={updateToFavPhotoIds}
          user={user}
          urls={urls}
          location={location}
          id={id}
          similar_photos={similar_photos}
        />
        
      ) : (
        <PhotoFavButton
          favorites={favorites}
          updateToFavPhotoIds={updateToFavPhotoIds}
          user={user}
          urls={urls}
          location={location}
          id={id}
          similar_photos={dataForPhotoId.similar_photos}
        />
      )}
      {Array.isArray(similar_photos)? <img
        onClick={() => {
          setPhotoSelected(id, user, urls, location, similar_photos);
        }}
        className="photo-list__image"
        src={urls.regular}
        alt="picture"
      /> : <img
      onClick={() => {
        setPhotoSelected(id, user, urls, location, dataForPhotoId.similar_photos);
      }}
      className="photo-list__image"
      src={urls.regular}
      alt="picture"
    />}
      
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={user.profile}
          alt="profile image"
        />
        <div className="photo-list__user-info">
          <b>{user.username}</b>
          <p className="photo-list__user-location">{`${location.city}, ${location.country}`}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
