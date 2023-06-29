// CSS
import "./Profile.css";

import { upload } from "../../utils/config";
// packages
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
// components
import Message from "../../components/Message/Message";
import { Link } from "react-router-dom";
import { BsFillEyeFill, BsPencilFill, BsXLg } from "react-icons/bs";
// redux

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
};

export default Profile;
