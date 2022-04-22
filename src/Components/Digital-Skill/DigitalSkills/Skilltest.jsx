import React from "react";
import { Image, InterestCardWrapper } from "../DigitalSkillsCard/digitalSkillsCard.styles";
import pic from "../../../assests/images/website_0.png";

const Skilltest = ({ cardImage, cartText }) => {
  return (
    <InterestCardWrapper>
      <div className="card_image_wrapper">
        <Image src={cardImage || pic} alt={"image"} />
      </div>
      <span className="card_text_wrapper">
        {" "}
        <div className="title">{cartText || "Test your digital skills"}</div>
        <div className="body">
          {cartText ||
            `Assess your digital skills level in an easy and interactive way.
             Find out where your strengths and weaknesses are and get targeted
              suggestions for appropriate training and courses.Users would be expected to 
              take on business-critical projects and gain relevant work experience.

`}
        </div>
      </span>
    </InterestCardWrapper>
  );
};

export default Skilltest;