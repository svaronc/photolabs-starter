import React, { useState } from "react";

export const useApplicationData = () => {
  const [visible, setVisible] = useState(false);
  const [photoDetails, setPhotoDetails] = useState({});
  const [favorites, setFavorites] = useState([]);

  return {
    state: {
      favorites,
      setFavorites,
      visible,
      setVisible,
      photoDetails,
      setPhotoDetails,
    },
    updateToFavPhotoIds: () => {
      const isFavorite = favorites.includes(id);
      if(isFavorite) {
        setFavorites(favorites.filter(photoId => photoId !== id))
      } else {
        setFavorites([...favorites, id])
      }
      
    },
    setPhotoSelected: () => {
      setVisible((prev) => !prev);
      setPhotoDetails({
        id,
        username: user.username,
        url: urls.full,
        profile: user.profile,
        location: locationString,
        similar_photos: similar_photos,
      });
    },
    onClosePhotosDetailsModal: () => {
      setVisible(false);
      setPhotoDetails({});
    },
  };
};
