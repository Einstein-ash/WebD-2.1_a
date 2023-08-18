import React, { useState } from "react";
import data from "./data.jsx";
import Workshops from "./WorkshopDetails";
import NavBar2 from "../Navbar2.jsx";
import "../../assets/css/WorkshopDetails.css";

const WorkshopDetail = () => {
  const [ws, setws] = useState(data);
  function showworkshop(id) {
    const newWorkshops = ws.filter((tour) => tour.id === id);
    setws(newWorkshops);
  }

  return (
    <div className="App">
      <NavBar2 />
      <Workshops ws={ws} showworkshop={showworkshop} />
    </div>
  );
};

export default WorkshopDetail;
