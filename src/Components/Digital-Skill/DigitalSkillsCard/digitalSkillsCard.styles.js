import styled from "styled-components";
import { colors, fontSizes, fontWeight } from "../../../lib/theme";
// import heroImg from "../../../assests/images/hero-img1.png";

export const InterestCardWrapper = styled("section")`
  padding: 24px;
  width: 552px;
  height: 190px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  border-radius: 6px;
  align-items: center;
  -ms-flex-align: center;
  -webkit-box-align: center;
  border: 0.1px solid #8080800f;
  background-color: ${colors.text};
  transition: all 100ms ease-in-out;

  &:hover {
    box-shadow: 0px 0px 5px -2px ${colors.secondary};
  }

  .card_image_wrapper {
    height: 100%;
    display: flex;
    width: max-content;
    border-radius: 0.3rem;
    align-items: flex-start;
  }

  .card_text_wrapper {
    line-height: 22px;
    padding-left: 24px;
    display: inline-block;

    .title {
      font-weight: ${fontWeight.lg};
      color: ${colors.primary};
    }

    .body {
      font-size: ${fontSizes.md};
    }
  }
`;

export const Image = styled("img")`
  /* height: 100%; */
`;
