import React from "react";
import { Image, InterestCardWrapper } from "../InterestCard/interestCard.styles";
import pic from "../../../assests/images/hands_illustration.png";

const TrainingFund = ({ cardImage, cartText }) => {
  return (
    <InterestCardWrapper>
      <div className="card_image_wrapper">
        <Image src={cardImage || pic} alt={"image"} />
      </div>
      <span className="card_text_wrapper">
        {" "}
        {cartText || "Training Fund"}
      </span>
    </InterestCardWrapper>
  );
};

export default TrainingFund;
