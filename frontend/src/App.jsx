import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import topics from "mocks/topics";
import photos from "mocks/photos";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

// Note: Rendering a single component to build components in isolation

const App = () => {
  const [visible, setVisible] = useState(false);
  
  return (
    <div className="App">
      <HomeRoute topics = {topics} photos = {photos} setVisible = {setVisible}>
      </HomeRoute>
      {visible && <PhotoDetailsModal setVisible = {setVisible}/>}
    </div>
  );
};

export default App;
