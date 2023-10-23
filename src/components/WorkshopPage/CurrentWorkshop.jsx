import React from "react";
import "../../assets/css/WorkshopPage.css";
import image from "../../assets/images/Embedded_workshop_2k23_without_blur.jpg";
export default function CurrentWorkshop() {
  const visible = true; // Change to false to remove current workshop Element...
  const Gformlink = "https://forms.gle/ca4cTEqgTzMxezDW8"; // Link to regeistration form
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
            className="current-workshop-img "
          />
          <div className="current-workshop-info">
            <div>
              <h1 className="current-workshop-title">DIP Workshop</h1>
              <p className="current-workshop-description">
              Get ready for a symphony of code 👨‍💻 and circuits 🤖 as the EmR Club of NIT Kurukshetra proudly presents its much-anticipated Robotics Embedded Systems workshop: "RoboGesture: Exploring Robotics in Action"! 🚀
<br />
<br />
🌟 What to Expect:
Get ready to immerse yourself in the enchanting world of Robotics Engineering, where you'll unlock the potential of Embedded C, Arduino, Analog Circuits, Simulators, and Sensors. Our workshop is carefully crafted to accommodate participants of all skill levels, whether you're a curious beginner or an experienced enthusiast.
<br />
<br />
🤖 Hands-on Experience:
One of the highlights of this workshop is the opportunity to put your knowledge into action. You won't just learn theory; you'll dive into the practical side of things. In fact, you'll have the chance to create not one, but two exciting robotics embedded systems projects. 💡🤖🚀
<br />
<br />
📅 Date: 27-29th October
📍 Venue: ED Hall
<br />
<br />
🔥 Workshop Highlights:
- Gain a deep understanding of Embedded C programming.
- Dive into the world of Arduino and microcontroller-
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
