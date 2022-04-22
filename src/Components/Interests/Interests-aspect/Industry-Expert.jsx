import React from "react";
import { Image, InterestCardWrapper } from "../InterestCard/interestCard.styles";
import pic from "../../../assests/images/Trainingprovider@2.png";

const IndustryExpert = ({ cardImage, cartText }) => {
  return (
    <InterestCardWrapper>
      <div className="card_image_wrapper">
        <Image src={cardImage || pic} alt={"image"} />
      </div>
      <span className="card_text_wrapper">
        {" "}
        {cartText || "Industry Experts"}
      </span>
    </InterestCardWrapper>
  );
};

export default IndustryExpert;
