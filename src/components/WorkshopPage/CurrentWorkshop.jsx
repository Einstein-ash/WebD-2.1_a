import React from "react";
import "../../assets/css/WorkshopPage.css";
import image from "../../assets/images/dip_fee.png";
export default function CurrentWorkshop() {
  const visible = true; // Change to false to remove current workshop Element...
  const Gformlink = "https://docs.google.com/forms/d/e/1FAIpQLScYHejNj8lWYlgiqxrZlVRqbA56Jv9vypucfDMssFy3_JOJnw/viewform"; // Link to regeistration form
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
              🌟 Unlock the Magic of Pixels: Join Our Digital Image Processing Workshop! 📸

Are you ready to delve into the captivating world of pixels, filters, and the art of transforming ordinary images into extraordinary visual masterpieces? 🖼️

 💥What to Expect:
• Learn the fundamentals of image enhancement, restoration, and manipulation.
• Learn the tech stack Python, Numpy and OpenCV
• Unravel the secrets behind  powerful image filtering techniques.
</p>
              <p className="current-workshop-description">
                <b>Workshop Date :</b> 15/9/23 - 17/9/23
              </p>
              <p className="current-workshop-description">
                <b>Time :</b> 5:30 pm
              </p>
              <p className="current-workshop-description">
                <b>Location :</b> L - Block
              </p>
              <p className="current-workshop-description">
                <b>Cost per member :</b> Rs 100/-
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
