import React from "react";
import { Image, InterestCardWrapper } from "./jobsPlatformCard.styles";
import pic1 from "../../../assests/images/initiatives.png";
import pic2 from "../../../assests/images/Accessible.png";
import pic3 from "../../../assests/images/Collaborate.png";
import pic4 from "../../../assests/images/Community.png";
import pic5 from "../../../assests/images/information.png";
import pic6 from "../../../assests/images/SME Owner@2.png";

let cardData = [
  {
    image: pic1,
    text: "Gathers the major digital skills initiatives from across Africa. ",
  },
  {
    image: pic2,
    text: "Collects relevant and up to date Digital Skills content in one place. ",
  },
  {
    image: pic3,
    text: "Offers a collaborative space for the Community to interact and grow. ",
  },
  {
    image: pic4,
    text: "Provides an easy-to-use, accessible, and open platform for all users. ",
  },
  {
    image: pic5,
    text: "Provides an easy-to-use, accessible, and open platform for all users. ",
  },
  {
    image: pic6,
    text: "Provides an easy-to-use, accessible, and open platform for all users. ",
  },
];
const InterestCard = ({ cardImage, cartText }) => {
  return (
    <InterestCardWrapper>
      <div className="card_image_wrapper">
        <Image src={cardImage || pic1} alt={"image"} />
      </div>
      <span className="card_text_wrapper">
        {" "}
        {cartText ||
          "Gathers the major digital skills initiatives from across Africa. "}
      </span>
    </InterestCardWrapper>
  );
};

export default InterestCard;
