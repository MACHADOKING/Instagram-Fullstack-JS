// CSS
import styles from "./Home.module.css";
// components
import LikeContainer from "../../components/LikeContainer";
import PhotoItem from "../../components/PhotoItem";
import { Link } from "react-router-dom";
// hooks
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useResetComponentMessage } from "../../hooks/useResetComponentMessage";
// redux
import { getPhotos, like } from "../../slices/photoSlice";

const Home = () => {
  const dispatch = useDispatch();

  const resetMessage = useResetComponentMessage();

  const { user } = useSelector((state) => state.auth);
  const { photos, loading } = useSelector((state) => state.photo);

  // Load all photos
  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  // Like a photo
  const handleLike = (photo) => {
    dispatch(like(photo._id));

    resetMessage();
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className={styles.home}>
      <h1>Home</h1>
      <h2>Hello World</h2>
    </div>
  );
};

export default Home;
