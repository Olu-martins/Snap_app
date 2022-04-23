import styled from "styled-components";
import { colors, fontWeight } from "../../../lib/theme";

export const InterestCardWrapper = styled("section")`
  height: 130px;
  width: 405px;
  padding: 24px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  border-radius: 6px;
  align-items: center;
  -ms-flex-align: center;
  -webkit-box-align: center;
  border: 0.5px solid #8080800f;
  background-color: ${colors.text};
  transition: all 100ms ease-in-out;
  margin: 10px;

  &:hover {
    box-shadow: 0px 0px 5px -2px ${colors.secondary};
  }

  .card_image_wrapper {
    height: 100%;
    border-radius: 0.3rem;
  }

  .card_text_wrapper {
    line-height: 22px;
    padding-left: 24px;
    display: inline-block;
    font-weight: ${fontWeight.lg};
    color: ${colors.primary};
  }
`;

export const Image = styled("img")`
  height: 100%;
`;
