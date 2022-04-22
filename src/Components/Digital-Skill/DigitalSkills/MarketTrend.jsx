import React from "react";
import { Image, InterestCardWrapper } from "../DigitalSkillsCard/digitalSkillsCard.styles";
import pic from "../../../assests/images/SME Owner@2.png";

const MarketTrend = ({ cardImage, cartText }) => {
  return (
    <InterestCardWrapper>
      <div className="card_image_wrapper">
        <Image src={cardImage || pic} alt={"image"} />
      </div>
      <span className="card_text_wrapper">
        {" "}
        <div className="title">{cartText || "Digital Africa Initiative"}</div>
        <div className="body">
          {cartText ||
            `Nigeria’s inability to engage a large proportion of her youth 
            meaningfully through job creation has the potential for social dislocation.
             The dire unemployment situation many graduates and those with advanced education
              in the country face is a cause for widespread concern. 
`}
        </div>
      </span>
    </InterestCardWrapper>
  );
};

export default MarketTrend;