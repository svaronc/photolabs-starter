import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";
function PhotoFavButton({globalState, setGlobalState}) {
  const [like, setLike] = useState(false);
  const handleCLick = () => {
    setLike(prevLike => !prevLike)
    setGlobalState(prev => prev? prev : !prev)
  };
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected = {like} onClick={handleCLick} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
