import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({photos}) => {
  return (
    <ul className="photo-list">
       {photos.map((item) => (
        <PhotoListItem
          key={item.id}
          sampleData={item}
        ></PhotoListItem>
      ))}
    </ul>
  );
};

export default PhotoList;
