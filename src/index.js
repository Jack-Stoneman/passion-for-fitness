import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Welcome from "./Welcome";
import Navbar from "./Navbar";
import Calendar from "./Calendar";
import Process from "./Process";
import Gallery from "./Gallery";
import galleryOne from "./assets/gallery-1.jpg";
import galleryTwo from "./assets/gallery-2.jpg";
import galleryThree from "./assets/gallery-3.jpg";
import About from "./About";
import Benefits from "./Benefits";
import Contact from "./Contact";
import PersonalTraining from "./PersonalTraining";
import OnlineTraining from "./OnlineTraining";
import Specialisation from "./Specialisation";

const images = [galleryOne, galleryTwo, galleryThree];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Welcome />
    <Specialisation />
    <Process />
    <About />
    <PersonalTraining />
    <OnlineTraining />
    <Gallery images={images} interval={3000} />
    <Calendar />
    <Contact />
  </React.StrictMode>
);
