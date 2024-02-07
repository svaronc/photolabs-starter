import React from "react";

import "./PhotoList.scss";
import PhotoListItem from "../PhotoListItem/PhotoListItem";
import { Loading } from "../Loading/Loading";

const PhotoList = ({
  photos,
  favorites,
  setPhotoSelected,
  updateToFavPhotoIds,
  fullPhotoData,
  loading,
}) => {
  return (
    <>
      {loading ? (
        <ul className="photo-list">
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
        </ul>
      ) : (
        <ul className="photo-list">
          {photos.map((item) => (
            <PhotoListItem
              key={item.id}
              sampleData={item}
              favorites={favorites}
              updateToFavPhotoIds={updateToFavPhotoIds}
              setPhotoSelected={setPhotoSelected}
              fullPhotoData={fullPhotoData}
            ></PhotoListItem>
          ))}
        </ul>
      )}
    </>
  );
};

export default PhotoList;
