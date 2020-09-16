import React from "react";
import "./style.css";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";

const Sidebar = () => {
  return (
    <>
      <nav className="sidebar">
        <ul className="sidebar__list">
          <li className="sidebar__item">
            <a href="#">
              <div className="sidebar__photo">
                <span className="sidebar__text">MB</span>
              </div>
            </a>
          </li>

          <li>
            <a href="#">
              <div className="sidebar__photo">
                <span className="sidebar__text">CW</span>
              </div>
            </a>
          </li>

          <li>
            <a href="#">
            <div className="sidebar__photo">
            <ProfilePhoto/>
            </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="sidebar__photo">
                <span className="sidebar__text">DA</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="sidebar__photo">
                <span className="sidebar__text">JR</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
            <div className="sidebar__photo">
            <ProfilePhoto/>
            </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="sidebar__photo">
                <span className="sidebar__text">MV</span>
              </div>
            </a>
          </li>
        </ul>
        <div className="online">
          <span className="text--semibold">235 online </span>
         </div>
      </nav>
    </>
  );
};

export default Sidebar;
