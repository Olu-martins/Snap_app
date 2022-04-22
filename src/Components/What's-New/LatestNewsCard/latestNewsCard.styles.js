import styled from "styled-components";
import { colors, fontSizes, fontWeight } from "../../../lib/theme";
// import heroImg from "../../../assests/images/hero-img1.png";

export const LatestNewsCardWrapper = styled("section")`
  height: 400px;
  width: 328px;
  padding: 10px;
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
    width: 100%;
    border-radius: 0.3rem;
    overflow: hidden;
  }

  span {
    width: 100%;
    height: 10%;
    text-align: center;
    font-size: ${fontSizes.md};
    /* padding: 0.5rem 0 !important; */
    font-weight: ${fontWeight.md};

    &:nth-child(2) {
      display: flex;
      justify-content: flex-start;

      .img {
        height: 35px;
        width: 35px;
        overflow: hidden;
        border: 2px solid ${colors.secondary};
        object-fit: cover;
        border-radius: 50%;
        margin-right: 1rem;
      }

      p {
        color: ${colors.secondary};
        font-size: ${fontSizes.md};
      }
    }

    &:nth-child(3) {
      height: 30%;
      display: flex;
      align-items: flex-start;
      font-size: ${fontSizes.lg};
      color: ${colors.primary};
      padding: 10px 0;

      text-align: left;
    }

    &:last-child {
      display: flex;
      justify-content: flex-start;
    }
  }
`;

export const Image = styled("img")`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;
