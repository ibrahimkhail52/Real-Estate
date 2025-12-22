import React from "react";
import AboutHero from "./AboutHero/AboutHero";
import OurValues from "./OurValues/OurValues";
import Achievements from "./Achievements/Achievements";
import EstateinExperience from "./EstateinExperience/EstateinExperience";
import EstateinTeam from "./EstateinTeam/EstateinTeam";
import ValuedClients from "./ValuedClients/ValuedClients";

export default function About() {
  return (
    <div>
      <AboutHero />
      <OurValues />
      <Achievements />
      <EstateinExperience />
      <EstateinTeam />
      <ValuedClients />
    </div>
  );
}
