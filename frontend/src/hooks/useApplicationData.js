import React, { useReducer, useState, useEffect } from "react";
import axios from "axios";

export const ACTIONS = {
  TOGGLE_FAVORITE: "TOGGLE_FAVORITE",
  SET_PHOTO_SELECTED: "SET_PHOTO_SELECTED",
  CLOSE_PHOTO_DETAILS_MODAL: "CLOSE_PHOTO_DETAILS_MODAL",
  SET_PHOTO_DATA:" SET_PHOTO_DATA",
  SET_PHOTO_TOPIC: "SET_PHOTO_TOPIC"
};

const initialState = {
  visible: false,
  photoDetails: {},
  favorites: [],
  photoData: [],
  topicData: [],
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_FAVORITE:
      const isFavorite = state.favorites.includes(action.id);
      return {
        ...state,
        favorites: isFavorite
          ? state.favorites.filter((photoId) => photoId !== action.id)
          : [...state.favorites, action.id],
      };

    case ACTIONS.SET_PHOTO_SELECTED:
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

    case ACTIONS.CLOSE_PHOTO_DETAILS_MODAL:
      return {
        ...state,
        visible: false,
        photoDetails: {},
      };
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload
      }
      case ACTIONS.SET_PHOTO_TOPIC:
      return {
        ...state,
        topicData: action.payload
      }
    default:
      return state;
  }
}

export const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("/api/photos")
      .then((response) => {
        console.log(response.data);
        dispatch({type:ACTIONS.SET_PHOTO_DATA, payload: response.data })
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("/api/topics")
      .then((response) => {
        console.log(response.data);
        dispatch({type:ACTIONS.SET_PHOTO_TOPIC, payload: response.data })
      })
      .catch((error) => {
        console.error(error);
      });
  }, [])

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
