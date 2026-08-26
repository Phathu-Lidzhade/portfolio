import type { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-image">
        <img src={project.image} alt={`${project.title} screenshot`} />
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
        
        {(project.githubUrl || project.liveUrl) &&(
        <div className="project-links">
          {project.githubUrl && (
            <a href={project.githubUrl}
                target="_blank"
                rel="noonpoener noreferrer">
                  ● GitHub ↗
                </a>
          )}
        
          {project.liveUrl && (
            <a href={project.liveUrl}
                target="_blank"
                rel="noonpoener noreferrer">
                  ● Live Demo
                </a>
          )}
        
        </div>
        )}
        
      </div>
    </article>
  );
}

export default ProjectCard;