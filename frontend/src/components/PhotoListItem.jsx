import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  const name = props.sampleData.username;
  const imageId = props.sampleData.id
  const image = props.sampleData.imageSource;
  const location = `${props.sampleData.location.city} ${props.sampleData.location.country}`
  const profileImg = props.sampleData.profile;

    return (
    <div key={imageId}>
      <img src={image} alt="picture"/>
      <img src={profileImg} alt="profile image" />
      <h4>{name}</h4>
      <p>{location}</p>
    </div>
  )
};



export default PhotoListItem;
