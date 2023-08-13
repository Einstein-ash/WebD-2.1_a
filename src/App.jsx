import { BrowserRouter } from "react-router-dom";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {    Navbar, StarsCanvas ,
  // TabLinks, Hero, ,BlogPage,Team,SponsorPage
} from "./components";

import Home from './pages/Home';
import GalleryComp from './pages/GalleryPage';
import SponsorPage from './components/Sponsor/Sponsor';
import WorkshopPage from './pages/WorkshopPage'
import TeamComp from './pages/TeamPage';
import Blog from './pages/Blog';
// import Event from './pages/eventpage';
import ContactUs from './components/ContactUs/Contact'
// import EventPage from './pages/eventpage';


const App = () => {
  return (
    <BrowserRouter>

<Navbar/>
<StarsCanvas /> 

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/team" element={<TeamComp />} />
        <Route path="/sponsor" element={<SponsorPage />} />
   
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="/event" element={<EventPage />} /> */}

        <Route path="/gallery" element={<GalleryComp/>} />
        {/* <Route path="/event" element={<Event/>} /> */}
        <Route path="/workshop" element={<WorkshopPage />} />
      </Routes>

    </BrowserRouter>



  );
}

export default App;

