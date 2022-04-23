import React from "react";

import {
	Image,
	CommunityActivitiesCardWrapper,
} from "./communityActivitiesCard.styles";

import pic from "../../../assests/images/hands_illustration.png";

const InterestCard = ({ cardImage, cartText }) => {
	return (
		<CommunityActivitiesCardWrapper>
			<header>
				<div className="card_image_wrapper">
					<Image src={cardImage || pic} alt={"image"} />
				</div>
				<span className="card_text_wrapper">
					{" "}
					<div className="title">{cartText || "Training Provider"}</div>
					<div className="body">
						{cartText ||
							`Assess your digital skills level in an easy and interactive way.
             Find out where your strengths and weaknesses are and get targeted
              suggestions for appropriate training and courses. Digital Europe Programme logo Digital Europe Programme
`}
					</div>
				</span>
			</header>
			<span className="span">
				Created by
				<span>John Doe</span>| Posted 22 April 2022
			</span>
		</CommunityActivitiesCardWrapper>
	);
};

export default InterestCard;
