import React, { useReducer, useState } from "react";

export const ACTIONS = {
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
  SET_PHOTO_SELECTED: 'SET_PHOTO_SELECTED',
  CLOSE_PHOTO_DETAILS_MODAL: 'CLOSE_PHOTO_DETAILS_MODAL'
};

const initialState = {
  visible: false,
  photoDetails: {},
  favorites: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_FAVORITE":
      const isFavorite = state.favorites.includes(action.id);
      return {
        ...state,
        favorites: isFavorite
          ? state.favorites.filter((photoId) => photoId !== action.id)
          : [...state.favorites, action.id],
      };

    case "SET_PHOTO_SELECTED":
      return {
        ...state,
        visible: !state.visible,
        photoDetails: {
          id: action.id,
          username: action.user.username,
          url: action.urls.full,
          profile: action.user.profile,
          locationString: action.locationString,
          similar_photos: action.similar_photos,
        },
      };

    case "CLOSE_PHOTO_DETAILS_MODAL":
      return {
        ...state,
        visible: false,
        photoDetails: {},
      };

    default:
      return state;
  }
}

export const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    updateToFavPhotoIds: (id) => {
      console.log(state);
      dispatch({ type: "TOGGLE_FAVORITE", id });
    },
    setPhotoSelected: (id, user, urls, locationString, similar_photos) => {
      console.log(state);
      dispatch({
        type: "SET_PHOTO_SELECTED",
        id,
        user,
        urls,
        locationString,
        similar_photos,
      });
    },
    onClosePhotosDetailsModal: () => {
      console.log(state);
      dispatch({ type: "CLOSE_PHOTO_DETAILS_MODAL" });
    },
  };
};
