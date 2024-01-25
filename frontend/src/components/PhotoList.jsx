import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({photos, globalState, setGlobalState}) => {
  return (
    <ul className="photo-list">
       {photos.map((item) => (
        <PhotoListItem
          key={item.id}
          sampleData={item}
          globalState = {globalState}
          setGlobalState = {setGlobalState}
        ></PhotoListItem>
      ))}
    </ul>
  );
};

export default PhotoList;
