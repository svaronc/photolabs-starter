import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";
function PhotoFavButton() {
  const [like, setlike] = useState(false);
  const handleCLick = () => {
    setlike(prevLike => !prevLike)
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
