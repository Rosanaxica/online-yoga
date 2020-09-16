import React, { useState } from "react";
import "./style.css";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import { faAngleDown, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {



  return (
    <>
      <nav className="navbar">
        <div className="navbar__logo"></div>
        <div>
          <input
            type="text"
            placeholder="Encontre  o que você procura"
            className="navbar__search  "
          />
        </div>
        <div className="navbar__user">
          <div className="navbar__notification">
            <span>
              <FontAwesomeIcon icon={faBell} />
            </span>
          </div>
          <ProfilePhoto />
          <div className="navbar__dropdown">
            Thomas Jackson
            <span>
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
