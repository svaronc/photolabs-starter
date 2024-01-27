import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";
function PhotoFavButton({
  id,
  user,
  urls,
  location,
  favorites,
  updateToFavPhotoIds,
}) {
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon
          selected={favorites.includes(id)}
          onClick={() => {
            updateToFavPhotoIds(id, user, urls, location);
            
          }}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;
