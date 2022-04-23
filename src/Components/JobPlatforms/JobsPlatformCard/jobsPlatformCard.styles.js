import styled from "styled-components";
import { colors, fontSizes, fontWeight } from "../../../lib/theme";
// import heroImg from "../../../assests/images/hero-img1.png";

export const InterestCardWrapper = styled("section")`
  height: 213px;
  width: 379px;
  padding: 24px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
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
    height: 50%;
    border-radius: 0.3rem;
  }

  .card_text_wrapper {
    line-height: 22px;
    padding-left: 24px;
    display: inline-block;
    font-weight: ${fontWeight.lg};
    color: ${colors.primary};
  }

  span {
    width: 100%;
    height: 50%;
    text-align: center;
    font-size: ${fontSizes.md};
    padding: 1rem 0 !important;
    font-weight: ${fontWeight.md};
  }
`;

export const Image = styled("img")`
  height: 100%;
`;
