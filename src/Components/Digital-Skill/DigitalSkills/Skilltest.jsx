import React from "react";
import { Image, InterestCardWrapper } from "../DigitalSkillsCard/digitalSkillsCard.styles";
import pic from "../../../assests/images/hands_illustration.png";

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
              suggestions for appropriate training and courses. Digital Europe Programme logo Digital Europe Programme
`}
        </div>
      </span>
    </InterestCardWrapper>
  );
};

export default Skilltest;