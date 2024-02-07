import React from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal/PhotoDetailsModal";
import { useApplicationData } from "hooks/useApplicationData";
import PhotoLikedModal from "routes/PhotoLikedModal/PhotoLikedModal";

const App = () => {
  // Destructuring the state and functions from the custom hook.
  // This hook manages the application state and logic.
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotosDetailsModal,
    onSetTopic,
    onClickFavBadge,
  } = useApplicationData();

  return (
    <div className="App">
      {/* HomeRoute component displays the main page content */}
      <HomeRoute
        onSetTopic={onSetTopic} // Function to handle setting the current topic
        topics={state.topicData} // Data for topics
        photos={state.photoData} // Data for photos
        setPhotoSelected={setPhotoSelected} // Function to handle photo selection
        favorites={state.favorites} // Array of favorite photo IDs
        updateToFavPhotoIds={updateToFavPhotoIds} // Function to update favorite photos
        onClickFavBadge={onClickFavBadge}
        loading ={state.loading}
      ></HomeRoute>

      {/* Conditionally rendering the PhotoDetailsModal */}
      {/* It's displayed when 'state.visible' is true */}
      {state.visible && (
        <PhotoDetailsModal
          photoDetails={state.photoDetails} // Details of the selected photo
          setPhotoSelected={setPhotoSelected} // Function to set selected photo
          photos={state.photoData} // Data for photos
          favorites={state.favorites} // Array of favorite photo IDs
          updateToFavPhotoIds={updateToFavPhotoIds} // Function to update favorite photos
          onClosePhotosDetailsModal={onClosePhotosDetailsModal} // Function to close the modal
        />
      )}
      {state.likedPhotos && (
        <PhotoLikedModal
          photoDetails={state.favoritesData} // Details of the selected photo
          // Functio to set select photo
          photos={state.photoData} // Data for photos
          favorites={state.favorites} // Array of favorite photo IDs
          updateToFavPhotoIds={updateToFavPhotoIds} // Function to update favorite photos
          onClosePhotosDetailsModal={onClosePhotosDetailsModal} // Function to close the modal
          setPhotoSelected={setPhotoSelected}
        />
      )}
    </div>
  );
};

export default App;
