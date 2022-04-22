import styled from "styled-components";
import { colors, fontSizes, fontWeight } from "../../lib/theme";

export const HeaderWrapper = styled("header")`
  width: 100%;
  height: 80px;
  display: flex;
  line-height: 80px;
  align-items: center;
  background-color: ${({ noBackgroundColor }) =>
    noBackgroundColor ? colors.text : colors.primary};

  h2 {
    color: ${({ noBackgroundColor }) =>
      noBackgroundColor ? colors.primary : colors.secondary};

    i {
      color: ${({ noBackgroundColor }) =>
        noBackgroundColor ? colors.primary : colors.secondary};
    }
  }

  .nav__list {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    column-gap: 1.3rem;
  }

  .nav__item a {
    transition: 0.3s;
    text-decoration: none;
    font-size: ${fontSizes.md};
    font-weight: ${fontWeight.md};
    color: ${({ noBackgroundColor }) =>
      noBackgroundColor ? colors.primary : colors.text};
  }

  .nav__item a:hover {
    color: #17bf9e;
  }

  .nav__right {
    padding: 0 10px;
    border-left: 1px solid
      ${({ noBackgroundColor }) =>
        noBackgroundColor ? colors.primary : "grey"};
    p {
      font-size: ${fontSizes.md};
      color: ${colors.secondary};
      text-transform: capitalize;
      font-weight: ${fontWeight.md};
    }
  }

  .nav__right p i {
    font-size: ${fontSizes.lg};
  }

  .mobile__menu span i {
    color: ${({ noBackgroundColor }) =>
      noBackgroundColor ? colors.primary : colors.text};
    cursor: pointer;
    font-size: ${fontSizes.lg};
  }

  .mobile__menu {
    display: none;
  }

  @media only screen and (max-width: 991px) {
    .nav__menu {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #0a2b1ec2;
      z-index: 99;
      display: none;
    }

    .nav__list {
      position: absolute;
      background: #fff;
      top: 0;
      right: 0;
      width: 250px;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: 999;
      padding-top: 80px;
    }

    .mobile__menu {
      display: block;
    }
    .nav__right {
      display: none;
    }

    .active__menu {
      display: block;
    }
  }
`;
