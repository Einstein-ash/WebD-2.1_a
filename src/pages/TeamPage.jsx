import React from 'react'
// import FacultyCard from "../components/Faculty/FacultyCard"
import Card from '../components/Team/Card'
import {
    StarsCanvas,
  
  } from "../components";


function TeamPage() {
    return (


        
        // <div>
        // {/* <   div className='title'>Faculty InCharge</div> */}
        //         {/* <FacultyCard /> */}
        //     <div className='title'>Present Team</div>
        //         <Card />
        //         <StarsCanvas/>
        // </div>

<div>

     
        <div className="relative z-0 bg-primary">
            <Card />
        {/* <Navbar /> */}
          {/* <UpcomingWorkshops /> */}
          {/* <Contact /> */}

          <StarsCanvas />
        </div>
</div>

    );
}

export default TeamPage;