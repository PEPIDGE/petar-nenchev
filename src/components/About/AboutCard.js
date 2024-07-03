import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { Link } from "react-router-dom";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Petar Nenchev </span>
            from <span className="purple">Varna, Bulgaria.</span>
            <br />
            I am currently working in my <br /> social media marketing agency - <span className="purple"><a className="purple-link" href={"https://www.tiktok.com/@influence_media_bg"} target="_blank">Influence Media Bg</a></span>
            <br />
            I have completed 2.5 years online university in <span className="purple">SoftUni</span> 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Filming videos and editing
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming, Running and Gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
