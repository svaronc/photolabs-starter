import React from "react";
import FavIcon from "./FavIcon";

import "../styles/FavBadge.scss";

const FavBadge = ({ isFavPhotoExist, selected, onClickFavBadge }) => {
  return (
    <div className="fav-badge" onClick={() => onClickFavBadge()}>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={selected} />
    </div>
  );
};

export default FavBadge;
