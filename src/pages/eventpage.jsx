import React, { useState } from "react";
import Header from "../components/Event/component/common/header";
import RoboSoccor from "../components/Event/component/Robosoccor";
import Pixar from "../components/Event/component/Pixar";
import Simulator from "../components/Event/component/Simulator";
import MazeUp from "../components/Event/component/Maze up";
import BitCoding from "../components/Event/component/Bit Coding";

function EventPage() {
  const [activeTab, setActiveTab] = useState("RoboSoccor");
  return (
    <div>
      <Header activeTab={activeTab} setActiveTab={setActiveTab}></Header>
      {getCorrectScreen(activeTab)}
    </div>
  );
}
const getCorrectScreen = (tab_name) => {
  switch (tab_name) {
    case "RoboSoccor":
      return <RoboSoccor></RoboSoccor>;
    case "Pixar":
      return <Pixar></Pixar>;
    case "Simulator":
      return <Simulator></Simulator>;
    case "MazeUp":
      return <MazeUp></MazeUp>;
    case "BitCoding":
      return <BitCoding></BitCoding>;
    default:
      return <RoboSoccor></RoboSoccor>;
  }
};

export default EventPage;
