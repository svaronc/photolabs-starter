import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";
function PhotoFavButton({ id, favorites, updateToFavPhotoIds }) {
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon
          selected={favorites.includes(id)}
          onClick={() => updateToFavPhotoIds(id)}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;
