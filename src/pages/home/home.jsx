import React from "react";
import Navbar from "../../components/Home/Navbar/Navbar.jsx";
import Headers from "../../components/Home/Head/Headers.jsx";
import CustomCarousel from "../../components/Home/Carusel/Carusel.jsx";
import BasicExamples from "../../components/Home/Cards/Cards.jsx";
import AboutSection from "../../components/Home/main/main.jsx";
import MapComponent from "../../components/Home/Map/Map.jsx";
import Foter from "../../components/Home/Foter/Foter.jsx";

const Main = () => {
    return (
        <>
            <Navbar />
            <Headers />
            <CustomCarousel />
            <BasicExamples  />
            <AboutSection/>
            <MapComponent />
            <Foter />
        </>

    );
};

export default Main
