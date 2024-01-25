import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";
function PhotoFavButton({id, favorites, setFavorites}) {
  const isFavorite = favorites.includes(id);

  const handleCLick = () => {
    if(isFavorite) {
      setFavorites(favorites.filter(photoId => photoId !== id))
    } else {
      setFavorites([...favorites, id])
    }
    
  };
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected = {isFavorite} onClick={handleCLick} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
