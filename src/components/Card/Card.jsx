import React from "react";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import "./style.css";
import { faShareSquare} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = () => {
  return (
    <div className="card__description">
      <div className="card__feature">
          <div >
        <ProfilePhoto />
        <div className="card__title-container">

          <span className="card__title text--semibold text--big">
            Vipassana Yoga
          </span>
          <div className="card__subtitle">
            <div className="card__subtitle">
              AULA -{" "}
              <span className="card__name text--semibold">Juliana Goes</span>
            </div>
          </div>
        </div>
        </div>
        <span className="card__badge--purple text--medium">Yoga</span>
      </div>

      <div className="card__text">
        <div>
        Nesta meditação vamos buscar a purificação trabalhando a respiração por
        meio do foco e auto-observação.</div>
      <span className="icon">  <FontAwesomeIcon icon={faShareSquare} /></span>
      </div>
    </div>
  );
};

export default Card;
