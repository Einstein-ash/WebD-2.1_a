import "../../assets/css/UpcomingWorkshop.css";
import React from "react";
import pic1 from "../../assets/images/Embedded_workshop_2k23.jpg";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

const UpcomingWorkshops = () => {
  return (
    <div className="upcoming_workshop_block">
      <h1 class="glitch">
        <span aria-hidden="true">Upcoming Event</span>
        Upcoming Event
        <span aria-hidden="true">Upcoming Event</span>
      </h1>
      <div className="module_border_wrap ">
        <div className="module">
          <img alt="Upcoming workshop" className="shadow-sm shadow-white " src={pic1}></img>
          <AwesomeButton size="medium" type="secondary" href="https://forms.gle/ca4cTEqgTzMxezDW8">
            Apply Now
          </AwesomeButton>
        </div>
      </div>
    </div>
  );
};

export default UpcomingWorkshops;
