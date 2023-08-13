import React from "react";
import "../../assets/css/WorkshopPage.css";
import image from "../../assets/images/WorkshopPage/currworkshopimg.jpg";
export default function CurrentWorkshop() {
  const visible = true; // Change to false to remove current workshop Element...
  const Gformlink = "https://www.youtube.com"; // Link to regeistration form
  return (
    visible && (
      <div className="current-workshop-container">
        <h1 id="current-Workshop-Head" className="current-workshop-head">
          Ongoing Workshop
        </h1>
        <div className="current-workshop-card">
          <img
            src={image}
            alt="Current Workshop Image"
            className="current-workshop-img"
          />
          <div className="current-workshop-info">
            <div>
              <h1 className="current-workshop-title">Embedded Workshop</h1>
              <p className="current-workshop-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt perferendis beatae vel laboriosam aliquid magni
                voluptates.
              </p>
              <p className="current-workshop-description">
                <b>Team Size :</b> 4
              </p>
              <p className="current-workshop-description">
                <b>Workshop Date :</b> 18/7/23 - 20/7/23
              </p>
              <p className="current-workshop-description">
                <b>Cost per member :</b> 1500 Rs
              </p>
            </div>
            <a
              href={Gformlink}
              target="blank"
              className="current-workshop-register-btn-container"
            >
              <button className="current-workshop-register-btn">
                Register
              </button>
            </a>
          </div>
        </div>
      </div>
    )
  );
}
