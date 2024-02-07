import React from "react";
import "../styles/Loading.scss";

export function Loading() {

  return (
    <div className="photo-loading__item">
      <img className="photo-loading__image"/>
      <div className="photo-loading__user-details">
        <img
          className="photo-loading__user-profile"
        />
        <div className="photo-loading__user-info">
          
          <p className="photo-loading__user-location"></p>
        </div>
      </div>
    </div>
  );
}
