import React from "react";
import "./robosoccor.css";
import About from "../common/About Events";
import Winners from "../Winners/winners";
import ImageSection from "../common/Image_Section";
const a = {
  id: 1,
  heading: "RoboSoccor",
  content:
    "RoboSoccer, also known as robot soccer or robotic football, is a fascinating and rapidly growing sport that combines the thrill of soccer with cutting-edge robotics and artificial intelligence. This futuristic game is played by autonomous robots on a specially designed field, and it offers a unique and captivating experience for both players and spectators alike.The objective of RoboSoccer is simple: teams of robots compete against each other to score goals and emerge victorious. However, the execution of this objective is far from simple. The robots are equipped with advanced sensors, actuators, and AI algorithms, allowing them to perceive the environment, make decisions, and execute complex maneuvers with precision and agility.The game is played on a specialized field that resembles a traditional soccer pitch. ",
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
    url: "https://emrnitk.github.io/static/media/w4.c2824f4c77a9c431c8cd.JPG",
    title: "image1",
  },
  {
    url: "https://emrnitk.github.io/static/media/w5.3d0d87b5a8ee7beef930.JPG",
    title: "image3",
  },
  {
    url: "https://emrnitk.github.io/static/media/w3.d3cfa7d332bdf24fdf56.JPG",
    title: "image4",
  },
  {
    url: "https://emrnitk.github.io/static/media/w7.26164a08f60e12854a00.JPG",
    title: "image5",
  },
];
function RoboSoccor() {
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

export default RoboSoccor;
