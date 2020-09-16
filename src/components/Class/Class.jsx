import React from 'react';
import './style.css'


const Class=({classes})=>{
    return(
<>
    <div className="class__card">
    <div className="class__text">
      <span className="text--semibold">{classes.className} - {classes.type} </span>
      <span className="text--med">{classes.startTime}  ~ {classes.endTime} </span>
    </div>
  </div>
</>
    )




}
export default Class;