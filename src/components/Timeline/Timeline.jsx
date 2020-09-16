import React, { useEffect, useState } from "react";
import { renderIntoDocument } from "react-dom/test-utils";
import Class from "../Class/Class";
import Line from "../Line/Line";
import "./style.css";

const Timeline = ({ classes }) => {

  return (
    <>
      <div className="timeline">
        <span className="timeline__title text--bold">Programação de Hoje</span>

        <div className="timeline__container">
          <div className="line"></div>

         {classes.map((cls)=>{return(<>
          
            <div className="timeline__class">
                    <Class classes={cls} />
                    </div>
          </>)})}

                
        </div>
      </div>
    </>
  );
};

export default Timeline;
