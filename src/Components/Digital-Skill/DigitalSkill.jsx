import React from "react";
import Skilltest from "./DigitalSkills/Skilltest";
import './Digitalskill.css'
import DigitalAfrica from "./DigitalSkills/DigitalAfrica";
import MeetIndustries from "./DigitalSkills/MeetIndustries";
import MarketTrend from "./DigitalSkills/MarketTrend";

const Digitalskill = () => {
  return (  
     
      <div className="digitalskill">
          <Skilltest />
          <DigitalAfrica />
          <MeetIndustries />
          <MarketTrend />
      </div>    
  );
};

export default Digitalskill;
