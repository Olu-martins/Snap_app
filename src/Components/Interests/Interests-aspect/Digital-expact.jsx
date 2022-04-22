import React from "react";
import { Image, InterestCardWrapper } from "../InterestCard/interestCard.styles";
import pic from "../../../assests/images/Digital Expert@2.png";

const DigitalExpact = ({ cardImage, cartText }) => {
  return (
    <InterestCardWrapper>
      <div className="card_image_wrapper">
        <Image src={cardImage || pic} alt={"image"} />
      </div>
      <span className="card_text_wrapper">
        {" "}
        {cartText || "Digital Expacts"}
      </span>
    </InterestCardWrapper>
  );
};

export default DigitalExpact;
