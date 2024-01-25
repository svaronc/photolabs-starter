import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";
function PhotoFavButton({id, globalState, setGlobalState}) {
  const isFavorite = globalState.includes(id);

  const handleCLick = () => {
    if(isFavorite) {
      setGlobalState(globalState.filter(photoId => photoId !== id))
    } else {
      setGlobalState([...globalState, id])
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
