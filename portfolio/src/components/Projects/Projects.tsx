"use client";
import React, { useEffect, useState } from "react";
import "./Projects.scss";
import { data } from "./data/projects";

interface Tag {
    name: string;
    image: string;
}

interface Project {
    name: string;
    tags: Tag[];
    preview: string;
    link: string;
  }

export default function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [currentProject, setCurrentProject] = useState(0);
    const [fade, setFade] = useState(false);

    const nextProject = () => {
        setFade(true);
        setCurrentProject((currentProject + 1) % projects.length);
        setTimeout(() => {
            setFade(false);
        }, 500);
    }

    const prevProject = () => {
        setFade(true);
        setCurrentProject((currentProject - 1 + projects.length) % projects.length);
        setTimeout(() => {
            setFade(false);
        }, 500);
    }
    useEffect(() => {
        setProjects(data.projects);
    }, []);

    return (
    <section className="projects">
    <div className="projects-header">
        <h2>Projects</h2>
        <div className="line"></div>
        <div className="pages">
            <div className="arrow" onClick={prevProject}>
                <img src="images/left-arrow.svg" alt="left arrow" />
                <p className="s10">PREV</p>
            </div>
            <div className="page-count">
                <p className="s10 italic">{currentProject + 1}/{projects.length}</p>
            </div>
            <div className="arrow" onClick={nextProject}>
                <p className="s10">NEXT</p>
                <img src="images/right-arrow.svg" alt="left arrow" />
            </div>
        </div>
    </div>
    {projects.length > 0 && (
        <div className="project">
            <div className={`project-container ${fade ? 'fade-in' : ''}`}>
                <div className="project-header">
                    <div className="project-info">
                        <h3 className="s16 italic w500">{projects[currentProject].name}</h3>
                        <div className="tags">
                            {projects[currentProject].tags.map((tag, index) => (
                            <div className="tag" key={index}>
                                <img src={tag.image} alt="project tag" />
                                <p className="s12 black">{tag.name}</p>
                            </div>
                            ))}
                        </div>
                    </div>
                    <a href={projects[currentProject].link} target="_blank" rel="noreferrer">
                        <img src="images/open-link.svg" alt="open link" className="link" />
                    </a>
                </div>
                <div className="project-preview">
                    <img src={projects[currentProject].preview} alt="website preview"/>
                </div>
            </div>
        </div>
    )}
    </section>

  );
}
