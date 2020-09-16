import React from "react";
import "./style.css"
import image from '../../assets/images/user.png';

const ProfilePhoto = () => {
  return (
    <>
   
          <img
            className="profile-photo__photo"
            src={image}
            alt="imagem do usuario"
          />

</>
  );
};

export default ProfilePhoto;
