import React from "react";

import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";
import PhotoFavButton from "components/PhotoFavButton";

// Note: Rendering a single component to build components in isolation
const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};
const App = () => {
  const photos = new Array(3).fill(null);

  return (
    <div className="App">
      {photos.map((_, index) => (
        <PhotoListItem
          key={index}
          sampleData={sampleDataForPhotoListItem}
        ></PhotoListItem>
      ))}
    </div>
  );
};

export default App;
