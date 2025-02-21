import { Col } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Import icons

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  repoLink,
  liveLink,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="buttons"></div>
        </div>
      </div>
      <a href={repoLink} target="_blank" className="custom-btn github">
        <FaGithub /> GitHub
      </a>
      <a href={liveLink} target="_blank" className="custom-btn live">
        <FaExternalLinkAlt /> Live Demo
      </a>
    </Col>
  );
};
