import styled from "styled-components";
import { colors, fontSizes, fontWeight } from "../../../lib/theme";

export const CommunityActivitiesCardWrapper = styled("section")`  
  height: 150px;
  padding: 24px;
  border-radius: 6px;
  border: 0.1px solid #8080800f;
  background-color: ${colors.text};
  transition: all 100ms ease-in-out;

  &:hover {
    box-shadow: 0px 0px 5px -2px ${colors.secondary};
  }

  header {
    height: 85%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    -ms-flex-align: center;
    -webkit-box-align: center;
    overflow: hidden;
  }
  .span {
    height: 15%;    
    color: ${colors.gray};
    font-size: ${fontSizes.md};

    span {
      color: ${colors.primary};
      padding: 0 5px;
    }
  }

  .card_image_wrapper {
    height: 100%;
    display: flex;
    width: max-content;
    border-radius: 0.3rem;
    align-items: flex-start;
  }

  .card_text_wrapper {
    height: 100%;
    line-height: 18px;
    padding-left: 24px;
    display: inline-block;

    .title {
      font-weight: ${fontWeight.lg};
      color: ${colors.primary};
    }

    .body {
      font-size: ${fontSizes.md};
      overflow: scroll;
    }
  }
`;

export const Image = styled("img")`  
`;
