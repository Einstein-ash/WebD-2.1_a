import "../../assets/css/UpcomingWorkshop.css";
import React from "react";
import pic1 from "../../assets/images/dip_fee.png";
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
          <AwesomeButton size="medium" type="secondary" href="https://docs.google.com/forms/d/e/1FAIpQLScYHejNj8lWYlgiqxrZlVRqbA56Jv9vypucfDMssFy3_JOJnw/viewform">
            Apply Now
          </AwesomeButton>
        </div>
      </div>
    </div>
  );
};

export default UpcomingWorkshops;
