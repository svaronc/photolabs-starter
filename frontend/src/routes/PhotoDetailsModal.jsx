import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = ({ setVisible }) => {
  const hanldleCloseButton = () => {
    setVisible(false);
  };
  return (
    <div className="photo-details-modal">
      <button
        onClick={hanldleCloseButton}
        className="photo-details-modal__close-button"
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  );
};

export default PhotoDetailsModal;
