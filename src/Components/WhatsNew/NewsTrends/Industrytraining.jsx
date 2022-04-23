import React from "react";
import { Image, LatestNewsCardWrapper } from "../NewsCard/latestNewsCard.styles";
import pic1 from "../../../assests/trends/12.jpg";

const IndustryTraining = ({
  cardImage,
  authorImage,
  authorName,
  cartText,
  btnText,
}) => {
  return (
    <LatestNewsCardWrapper>
      <div className="card_image_wrapper">
        <Image src={cardImage || pic1} alt={"image"} />
      </div>
      <span>
        <Image className="img" src={authorImage || pic1} alt={"image"} />
        <p>{authorName || "Lagos Business school"}</p>
      </span>
      <span>
        {" "}
        {cartText ||
          "Expanded Economic Empowerment Programme, Lagos State Government offers free short-term skill acquisition and vocation programme with free learning materials. You can register at designated centres across the State."}
      </span>
      <span>
        <button
          className="btn"
          style={{
            height: "30px",
            fontSize: "12px",
            padding: "0px 15px",
            borderRadius: "4px",
          }}
        >
          {btnText || "Newest Events"}
        </button>
      </span>
    </LatestNewsCardWrapper>
  );
};

export default IndustryTraining;
