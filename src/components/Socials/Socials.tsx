"use client"
import "./Socials.scss";
import { motion } from "motion/react"

export default function Socials() {
  return (
    <motion.section
     initial={{ opacity: 0, y: 15 }}
     whileInView={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.75, ease: "easeIn" }}
     viewport={{ once: true }}
     className="socials"
     >
        <div className="socials-header">
            <h2>Social Links</h2>
            <div className="stars">
                <span className="blue">*</span>
                <span className="blue">*</span>
                <span className="red">*</span>
                <span className="red">*</span>
                <span className="yellow">*</span>
                <span className="yellow">*</span>
            </div>
        </div>
        <div className="socials-container">
            <div className="social-links">
                <div className="social-container">
                    <div className="spacer"></div>
                    <a className="social" href="https://github.com/CamdenCall" target="_blank">
                        <img src="/images/Socials/github.svg" alt="github" />
                        <p className="s12 w500">Github</p>
                    </a>
                    <div className="spacer"></div>
                </div>
                <div className="social-container">
                    <div className="spacer"></div>
                    <a className="social" href="https://www.upwork.com/freelancers/~01b4cc67603e3bb8e8" target="_blank">
                        <img src="/images/Socials/upwork.svg" alt="upwork" />
                        <p className="s12 w500">Upwork</p>
                    </a>
                    <div className="spacer"></div>
                </div>
                <div className="social-container">
                    <div className="spacer"></div>
                    <a className="social" href="https://www.linkedin.com/in/camden-call-26b99a26a/" target="_blank">
                        <img src="/images/Socials/linkedin.svg" alt="linkedin" />
                        <p className="s12 w500">LinkedIn</p>
                    </a>
                    <div className="spacer"></div>
                </div>
                <div className="social-container">
                    <div className="spacer"></div>
                    <a className="social" href="/resume/resume.pdf"download="camden_resume">
                        <img src="/images/Socials/resume.svg" alt="resume" />
                        <p className="s12 w500">Resume</p>
                    </a>
                    <div className="spacer"></div>
                </div>
            </div>
        </div>
        <img src="/images/Background/hashtag.png" alt="hashtag" className="hashtag" />
    </motion.section>

  );
}
