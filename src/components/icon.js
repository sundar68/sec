import React from "react";
import './ico.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faGithub,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social">
      <div class="btnsame btn1">
      <a href="https://www.facebook.com/enviropromise/"
          className="facebook social">
           <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      </div>
      <div class="btnsame btn2">
      <a href="https://www.linkedin.com/company/enviropromise"
          className="linkedin social">
         <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      </div>
      <div class="btnsame btn3">
      <a href="https://twitter.com/enviro_promise?s=21" className="twitter social">
           <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      </div>
      <div class="btnsame btn4">
      <a href="https://instagram.com/enviro_promise?utm_medium=copy_link" className="instagram social">
         <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a> 
      </div>
    </div>
  );
}