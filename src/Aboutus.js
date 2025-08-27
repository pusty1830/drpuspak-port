import React from "react";
import AboutSection from "./components/AboutSection";
import AboutMe from "./components/Aboutme";
import Aboutlast from "./components/Aboutlast";
import Qualification from "./components/Qualification";

const Aboutus = () => {
  return (
    <div>
      <div class="mt-5">
        <AboutMe />
      </div>
      <Qualification />
      <AboutSection />
      <Aboutlast />
    </div>
  );
};

export default Aboutus;
