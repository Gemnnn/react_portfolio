const Projects = ({ projectName, briefInfo, gitLink }) => {
  return (
    <div className="project-box">
      <h3>{projectName}</h3>
      <p>{briefInfo}</p>
      <a href={gitLink} target="_blank" rel="noopener noreferrer">
        GitHub Repository
      </a>
    </div>
  );
};

export default Projects;
