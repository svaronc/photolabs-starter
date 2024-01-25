import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({photos, favorites, setFavorites, setVisible}) => {
  return (
    <ul className="photo-list">
       {photos.map((item) => (
        <PhotoListItem
          key={item.id}
          sampleData={item}
          favorites = {favorites}
          setFavorites = {setFavorites}
          setVisible = {setVisible}
        ></PhotoListItem>
      ))}
    </ul>
  );
};

export default PhotoList;
