// CSS
import "./PhotoItem.css";
// packages
import React from "react";
import { upload } from "../../utils/config";
import { Link } from "react-router-dom";

const PhotoItem = ({ photo }) => {
  return (
    <div className="photo-item">
      {photo.image && (
        <img src={`${upload}/photos/${photo.image}`} alt={photo.title} />
      )}
      <h2>{photo.title}</h2>
      <p className="photo-author">
        Publicada por:{" "}
        <Link to={`/users/${photo.userId}`}>{photo.userName}</Link>
      </p>
    </div>
  );
};

export default PhotoItem;