import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Nikhil.</div>
      <div>
   
        <Link to={"https://www.linkedin.com/in/nikhil-priyadarshi-437bb3266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/singh_nikhil06/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
