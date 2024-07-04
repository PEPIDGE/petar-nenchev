import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function ProjectCards(props) {
  const renderButtonContent = (platform) => {
    switch (platform) {
      case "github":
        return (
          <>
            <BsGithub /> GitHub
          </>
        );
      case "tiktok":
        return (
          <>
            <FaTiktok /> TikTok
          </>
        );
      case "youtube":
        return (
          <>
            <FaYoutube /> YouTube
          </>
        );
      case "website":
      default:
        return (
          <>
            <CgWebsite /> Website
          </>
        );
    }
  };

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{ opacity: 1 }} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.link1 && (
          <Button variant="primary" href={props.link1.url} target="_blank">
            {renderButtonContent(props.link1.platform)}
          </Button>
        )}
        {"\n"}
        {"\n"}
        {props.link2 && (
          <Button
            variant="primary"
            href={props.link2.url}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            {renderButtonContent(props.link2.platform)}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
