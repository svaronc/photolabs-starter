import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = ({sampleData}) => {
  const { username, id, imageSource, location, profile } = sampleData;
  const locationString = `${location.city} ${location.country}`;

  return (
    <div key={id}>
      <img src={imageSource} alt="picture"/>
      <img src={profile} alt="profile image" />
      <h4>{username}</h4>
      <p>{locationString}</p>
    </div>
  )
};



export default PhotoListItem;
