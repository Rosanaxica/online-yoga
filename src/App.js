import React, { useEffect, useState } from "react";
import "./App.css";
import api from "./services/api";

import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Timeline from "./components/Timeline/Timeline";
import Video from "./components/Video/Video";
import { faHourglass } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    async function loadClasses() {
      const response = await api.get("/classes");
      setClasses(response.data);
    }
    loadClasses();
  },[]);


  const [hours, setHours] = useState([]);

  useEffect(() => {
    setHours([
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "17:00",
      "18:00",
      "19:00",
    ]);
  }, []);
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="content__container">
        <Video />
        <Timeline classes={classes}  />
      </div>
    </>
  );
};

export default App;
