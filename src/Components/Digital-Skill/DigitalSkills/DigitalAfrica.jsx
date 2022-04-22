import React from "react";
import { Image, InterestCardWrapper } from "../DigitalSkillsCard/digitalSkillsCard.styles";
import pic from "../../../assests/images/hands_illustration.png";

const DigitalAfrica = ({ cardImage, cartText }) => {
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
            `The platform will partner and network with highly skilled personnel
             bring to a business table their practical and academic years of experience 
             to form up a concrete blueprint on which the Nigerian/African economy can thrive. 
             Combination of expertise, proficiency, and commitment leveraging deep industry experience,
             along with using analytical rigor to drive outstanding results for businesses in Nigeria/Africa. 
`}
        </div>
      </span>
    </InterestCardWrapper>
  );
};

export default DigitalAfrica;