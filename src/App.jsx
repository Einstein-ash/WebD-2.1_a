import { BrowserRouter } from "react-router-dom";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {    Navbar, StarsCanvas ,
  // TabLinks, Hero, ,BlogPage,Team,SponsorPage
} from "./components";

import Home from './pages/Home';
import GalleryComp from './pages/GalleryPage';
// import workshop from './pages/SponsorPage';
import TeamComp from './pages/TeamPage';
// import Blog from './pages/Blog';
import ContactUs from './components/ContactUs/Contact'


const App = () => {
  return (
    <BrowserRouter>

<Navbar/>
<StarsCanvas /> 

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/team" element={<TeamComp />} />
        {/* <Route path="/Roger28-51-emr/sponser" element={<SponsorPage />} /> */}
   

        <Route path="/gallery" element={<GalleryComp/>} />
        {/* <Route path="/WebD-2.0/workshop" element={<workshop/>} /> */}
      </Routes>

    </BrowserRouter>



  );
}

export default App;

