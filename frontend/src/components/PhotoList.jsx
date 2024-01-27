import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({
  photos,
  favorites,
  setPhotoSelected,
  updateToFavPhotoIds,
}) => {
  return (
    <ul className="photo-list">
      {photos.map((item) => (
        <PhotoListItem
          key={item.id}
          sampleData={item}
          favorites={favorites}
          updateToFavPhotoIds={updateToFavPhotoIds}
          setPhotoSelected={setPhotoSelected}
          setPhotoDetails
        ></PhotoListItem>
      ))}
    </ul>
  );
};

export default PhotoList;
