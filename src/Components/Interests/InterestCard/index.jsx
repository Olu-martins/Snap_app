import React from "react";
import { Image, InterestCardWrapper } from "./interestCard.styles";
import pic from "../../../assests/images/Trainingprovider@2.png";

const InterestCard = ({ cardImage, cartText }) => {
  return (
    <InterestCardWrapper>
      <div className="card_image_wrapper">
        <Image src={cardImage || pic} alt={"image"} />
      </div>
      <span className="card_text_wrapper">
        {" "}
        {cartText || "Training Provider"}
      </span>
    </InterestCardWrapper>
  );
};

export default InterestCard;
