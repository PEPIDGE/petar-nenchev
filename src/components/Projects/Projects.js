import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import influencemediabg from "../../Assets/Projects/influencemediabg.png";
import editor from "../../Assets/Projects/codeEditor.png";
import bgdronefootage from "../../Assets/Projects/bgdronefootage.png";
import suicide from "../../Assets/Projects/suicide.png";
import miami from "../../Assets/Projects/miami.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bgdronefootage}
              title="Bg Drone Footage"
              description="This is my personal website for drone services. I built this in 2022 and it was my first big project. I built it using React.js."
              link1={{ url: "https://github.com/PEPIDGE/bg-drone-footage", platform: "github" }}
              link2={{ url: "https://bgdronefootage.com/", platform: "website" }}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={miami}
              title="Miami music video"
              description="This is my biggest project that I have been involved in. It is a music video. I helped with all the sets and also did the drone shots."
              link1={{ url: "https://www.youtube.com/watch?v=glbm4gdqT60", platform: "youtube" }}
              link2={{ url: "https://miamimusicvideo.com/", platform: "website" }}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={influencemediabg}
              title="Influence Media Bg"
              description="This is my social media marketing agency TikTok. I am the videographer, manager, editor, and producer."
              link1={{ url: "https://www.tiktok.com/@influence_media_bg", platform: "tiktok" }}
              link2={{ url: "https://influencemediabg.com/", platform: "website" }}
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
