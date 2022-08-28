import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { IconContext } from "react-icons/lib";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/biringa/" target="black">
        <IconContext.Provider value={{ className: "linkedinIcon" }}>
          <BsLinkedin />
        </IconContext.Provider>
      </a>
      <a href="https://github.com/kingdallas24" target="black">
        <IconContext.Provider value={{ className: "gitHubIcon" }}>
          <BsGithub />
        </IconContext.Provider>
      </a>
    </div>
  );
};

export default HeaderSocials;
