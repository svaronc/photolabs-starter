import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import topics from "mocks/topics";
import photos from "mocks/photos";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import { useApplicationData } from "hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotosDetailsModal,
  } = useApplicationData();
  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        setPhotoSelected={setPhotoSelected}
        favorites={state.favorites}
        updateToFavPhotoIds={updateToFavPhotoIds}
      ></HomeRoute>
      {state.visible && (
        <PhotoDetailsModal
          photoDetails={state.photoDetails}
          setPhotoSelected={setPhotoSelected}
          photos={photos}
          favorites={state.favorites}
          updateToFavPhotoIds={updateToFavPhotoIds}
          onClosePhotosDetailsModal = {onClosePhotosDetailsModal}
        />
      )}
    </div>
  );
};

export default App;
