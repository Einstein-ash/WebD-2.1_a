import React from "react";
import "./simulator.css";
import About from "../common/About Events";
import Winners from "../Winners/winners";
import ImageSection from "../common/Image_Section";
const a = {
  id: 1,
  heading: "Simulator",
  content:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, voluptas dolore incidunt corrupti nesciunt similique autem quisquam. Consequuntur nemo corporis eaque illo distinctio tempore repudiandae aut, amet porro qui soluta iusto possimus odio cum mollitia assumenda in molestias iure modi nostrum cupiditate quo vitae facere exercitationem? Iste harum quo officia, eveniet praesentium explicabo reiciendis veritatis consectetur nulla amet illo! Commodi repudiandae voluptatibus facilis quam dolorem voluptatem sunt facere eaque dignissimos consectetur, ab animi nihil officia fugiat quidem vitae architecto fuga totam dolore repellat! Sunt explicabo ratione magnam corporis facilis, reprehenderit ",
};

const WinnerList = [
  {
    id: "1",
    title: "Richard",
    cover:
      "https://media.istockphoto.com/id/1051185180/photo/stubble-guy.webp?b=1&s=170667a&w=0&k=20&c=ybyJ7U-13zbg2Qujy4u2cBOh5UO-pGZXJmaGAIEY4nM=",
    Position: "2 Position",
  },
  {
    id: "2",
    title: "Richard",
    cover:
      "https://media.istockphoto.com/id/1051185180/photo/stubble-guy.webp?b=1&s=170667a&w=0&k=20&c=ybyJ7U-13zbg2Qujy4u2cBOh5UO-pGZXJmaGAIEY4nM=",
    Position: "1 Position",
  },
  {
    id: "3",
    title: "Richard",
    cover:
      "https://media.istockphoto.com/id/1051185180/photo/stubble-guy.webp?b=1&s=170667a&w=0&k=20&c=ybyJ7U-13zbg2Qujy4u2cBOh5UO-pGZXJmaGAIEY4nM=",
    Position: "2 Position",
  },
  {
    id: "4",
    title: "Richard",
    cover:
      "https://media.istockphoto.com/id/1051185180/photo/stubble-guy.webp?b=1&s=170667a&w=0&k=20&c=ybyJ7U-13zbg2Qujy4u2cBOh5UO-pGZXJmaGAIEY4nM=",
    Position: "8 Position",
  },
  {
    id: "5",
    title: "Richard",
    cover:
      "https://media.istockphoto.com/id/1051185180/photo/stubble-guy.webp?b=1&s=170667a&w=0&k=20&c=ybyJ7U-13zbg2Qujy4u2cBOh5UO-pGZXJmaGAIEY4nM=",
    Position: "8 Position",
  },
  {
    id: "6",
    title: "Richard",
    cover:
      "https://media.istockphoto.com/id/1051185180/photo/stubble-guy.webp?b=1&s=170667a&w=0&k=20&c=ybyJ7U-13zbg2Qujy4u2cBOh5UO-pGZXJmaGAIEY4nM=",
    Position: "3 Position",
  },
  {
    id: "7",
    title: "Richard",
    cover:
      "https://media.istockphoto.com/id/1051185180/photo/stubble-guy.webp?b=1&s=170667a&w=0&k=20&c=ybyJ7U-13zbg2Qujy4u2cBOh5UO-pGZXJmaGAIEY4nM=",
    Position: "1 Position",
  },
];

const slides = [
  {
    url: "https://media.istockphoto.com/id/1161354857/photo/students-code-learning-in-car-robotics-on-electronic-board-with-construction-equipment-in.jpg?s=612x612&w=0&k=20&c=HTCKGSMD69tUmwyLmdQKnGh1J89YGd2yUDi0ubOkxYw=",
    title: "image1",
  },
  {
    url: "https://media.istockphoto.com/id/1357832209/photo/close-up-children-control-cars-robots-assembled-from-a-constructor-programmed-on-a-computer.jpg?s=612x612&w=0&k=20&c=n3Gq2SoP9vw7B2apBWmgUpjLz4pLvN1yOQbBmJWpfY0=",
    title: "image3",
  },
  {
    url: "https://media.istockphoto.com/id/1146241678/photo/teacher-learning-preparing-take-note-in-stem-education-robotics-for-creating-project-based.jpg?s=612x612&w=0&k=20&c=pHM7MKtWQs6ftQLV16Be1C_FP8_QibnVBP4I-PvmTTg=",
    title: "image4",
  },
  {
    url: "https://emrnitk.github.io/static/media/w7.26164a08f60e12854a00.JPG",
    title: "image5",
  },
];

function Simulator() {
  return (
    <div className="common-background">
      <div className="max-width about-wrapper">
        <div className="flex-container">
          <div className="flex-item-left">
            <About heading={a.heading} content={a.content}></About>
          </div>
          <div className="flex-item-right">
            <div className="images">
              <ImageSection slides={slides}></ImageSection>
            </div>
          </div>
        </div>
        <Winners list={WinnerList}></Winners>
      </div>
    </div>
  );
}

export default Simulator;
