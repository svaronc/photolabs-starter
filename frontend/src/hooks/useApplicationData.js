import React, { useReducer, useEffect } from "react";
import axios from "axios";

// Action types for use in the reducer function
export const ACTIONS = {
  TOGGLE_FAVORITE: "TOGGLE_FAVORITE",
  SET_PHOTO_SELECTED: "SET_PHOTO_SELECTED",
  CLOSE_PHOTO_DETAILS_MODAL: "CLOSE_PHOTO_DETAILS_MODAL",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_PHOTO_TOPIC: "SET_PHOTO_TOPIC",
  GET_PHOTOS_BY_TOPICS: "GET_PHOTOS_BY_TOPICS",
};

// Initial state for the reducer
const initialState = {
  visible: false,
  photoDetails: {},
  favorites: [],
  photoData: [],
  topicData: [],
};

// Reducer function to handle state changes based on dispatched actions
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_FAVORITE:
      const isFavorite = state.favorites.includes(action.id);
      // Toggle favorite status of a photo
      return {
        ...state,
        favorites: isFavorite
          ? state.favorites.filter((photoId) => photoId !== action.id)
          : [...state.favorites, action.id],
      };

    case ACTIONS.SET_PHOTO_SELECTED:
      // Set details of a selected photo
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
      // Close the photo details modal
      return {
        ...state,
        visible: false,
        photoDetails: {},
      };

    case ACTIONS.SET_PHOTO_DATA:
      // Set photo data from API response
      return {
        ...state,
        photoData: action.payload,
      };

    case ACTIONS.SET_PHOTO_TOPIC:
      // Set topic data from API response
      return {
        ...state,
        topicData: action.payload,
      };

    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      // Set photos by topics from API response
      return {
        ...state,
        photoData: action.payload,
      };

    default:
      return state;
  }
}

export const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch initial photo data
  useEffect(() => {
    axios.get("/api/photos").then((response) => {
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: response.data });
    });
  }, []);

  // Fetch initial topic data
  useEffect(() => {
    axios.get("/api/topics").then((response) => {
      dispatch({ type: ACTIONS.SET_PHOTO_TOPIC, payload: response.data });
    });
  }, []);

  // Function to toggle the favorite status of a photo
  const updateToFavPhotoIds = (id) => {
    dispatch({ type: ACTIONS.TOGGLE_FAVORITE, id });
  };

  // Function to set the currently selected photo
  const setPhotoSelected = (id, user, urls, locationString, similar_photos) => {
    dispatch({
      type: ACTIONS.SET_PHOTO_SELECTED,
      id,
      user,
      urls,
      locationString,
      similar_photos,
    });
  };

  // Function to close the photo details modal
  const onClosePhotosDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS_MODAL });
  };

  // Function to fetch and set photos by a specific topic
  const onSetTopic = (id) => {
    axios.get(`/api/topics/photos/${id}`).then((response) => {
      dispatch({
        type: ACTIONS.GET_PHOTOS_BY_TOPICS,
        payload: response.data,
      });
    });
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotosDetailsModal,
    onSetTopic,
  };
};
