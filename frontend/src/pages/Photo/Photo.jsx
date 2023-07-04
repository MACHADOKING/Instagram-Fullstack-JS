// CSS
import "./Photo.css";
// packages
import { useEffect, useState } from "react";
// components
import Message from "../../components/Message/Message";
import { Link, useParams } from "react-router-dom";
import PhotoItem from "../../components/PhotoItem/PhotoItem";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { upload } from "../../utils/config";
import { getPhoto } from "../../slices/photoSlice";

const Photo = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { photo, loading, error, message } = useSelector(
    (state) => state.photo
  );

  // comentários

  // load photo data
  useEffect(() => {
    dispatch(getPhoto(id));
  }, [dispatch, id]);

  // like and comments

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div id="photo">
      <PhotoItem photo={photo} />
    </div>
  );
};

export default Photo;
