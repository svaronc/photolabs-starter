import React, { useState } from "react";

export const useApplicationData = () => {
  const [visible, setVisible] = useState(false);
  const [photoDetails, setPhotoDetails] = useState({});
  const [favorites, setFavorites] = useState([]);

  return {
    state: {
      favorites,
      visible,
      photoDetails,
    },
    updateToFavPhotoIds: (id) => {
      const isFavorite = favorites.includes(id);
      if(isFavorite) {
        setFavorites(favorites.filter(photoId => photoId !== id))
      } else {
        setFavorites([...favorites, id])
      }
      
    },
    setPhotoSelected: (id,user,urls,locationString,similar_photos) => {
      setVisible((prev) => !prev);
      setPhotoDetails({
        id,
        username: user.username,
        url: urls.full,
        profile: user.profile,
        locationString: locationString,
        similar_photos: similar_photos,
      });
    },
    onClosePhotosDetailsModal: () => {
      setVisible(false);
      setPhotoDetails({});
    },
  };
};
