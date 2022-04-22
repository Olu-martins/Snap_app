import React from "react";
import { Image, InterestCardWrapper } from "../InterestCard/interestCard.styles";
import pic from "../../../assests/images/training.png";

const TradeUnion = ({ cardImage, cartText }) => {
  return (
    <InterestCardWrapper>
      <div className="card_image_wrapper">
        <Image src={cardImage || pic} alt={"image"} />
      </div>
      <span className="card_text_wrapper">
        {" "}
        {cartText || "Trade Unions"}
      </span>
    </InterestCardWrapper>
  );
};

export default TradeUnion;
