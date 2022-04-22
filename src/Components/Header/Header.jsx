import React, { useRef } from "react";
import { Container } from "reactstrap";
import { HeaderWrapper } from "./header.styles.js";

const navLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "Opportunities",
    url: "#",
  },

  {
    display: "Inspiration",
    url: "#",
  },
  {
    display: "Latest",
    url: "#",
  },
  {
    display: "Community",
    url: "#",
  },
  {
    display: "About",
    url: "#",
  },
];

const Header = ({ noBackgroundColor, userName = "User Profile" }) => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <HeaderWrapper noBackgroundColor={noBackgroundColor}>
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              <i class="ri-pantone-line"></i> Snaplearn
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((link, index) => (
                  <li key={index} className="nav__item">
                    <a href={link.url}>{link.display}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <i class="ri-user-line"></i> {userName}
              </p>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
