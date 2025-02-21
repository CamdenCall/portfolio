"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react"
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
    const [projects, setProjects] = useState<Project[]>(data.projects);
    const [currentProject, setCurrentProject] = useState(0);
    const [fade, setFade] = useState(false);

    const nextProject = () => {
        setFade(true);
        setCurrentProject((currentProject + 1) % projects.length);
        setTimeout(() => {
            setFade(false);
        }, 1000);
    }

    const prevProject = () => {
        setFade(true);
        setCurrentProject((currentProject - 1 + projects.length) % projects.length);
        setTimeout(() => {
            setFade(false);
        }, 1000);
    }

    return (
    <motion.section
     initial={{ opacity: 0, y: 15 }}
     whileInView={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.75, ease: "easeIn" }}
     viewport={{ once: true }}
     className="projects"
    >
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
                        <a href={projects[currentProject].link} target="_blank" rel="noreferrer" className="link">
                            <img src="images/open-link.svg" alt="open link" />
                        </a>
                    </div>
                    <div className="tags">
                            {projects[currentProject].tags.map((tag, index) => (
                            <div className="tag" key={index}>
                                <img src={tag.image} alt="project tag" />
                                <p className="s12 black">{tag.name}</p>
                            </div>
                            ))}
                        </div>
                </div>
                <div className="project-preview">
                    <img src={projects[currentProject].preview} alt="website preview"/>
                </div>
            </div>
        </div>
    )}
    </motion.section>

  );
}
