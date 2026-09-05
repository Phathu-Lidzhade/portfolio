import { useState } from "react";
import type { Project } from "../../data/projects";
import { getProjectImages } from "../../utils/projectImages";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {

  const images = getProjectImages(project.imageFolder);

  const [selectedImage, setSelectedImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  return (
    <>
    <article className="project-card">
      <div className="project-image">
        <img 
          src={images[selectedImage]} 
          alt={`${project.title} screenshot ${selectedImage + 1}`}
          onClick={() => setIsViewerOpen(true)} 
        />
      </div>

      <div className="project-thumbnails">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setSelectedImage(index)}
            className={selectedImage === index ? "active" : ""}
          >
            <img 
              src={image} 
              alt={`${project.title} thumbnail ${index + 1}`} 
            />
          </button>
        ))}
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

    {isViewerOpen && (
        <div className="image-viewer">
          <button 
            type="button"
            className="viewer-close"
            onClick={() => setIsViewerOpen(false)}
            aria-label="Close image viewer"
          >
            x
          </button>

          <img 
            src={images[selectedImage]} 
            alt={`${project.title} screenshot ${selectedImage + 1}`}
            className="viewer-image"
          />
        </div>
      )}
    </>
  );
}

export default ProjectCard;