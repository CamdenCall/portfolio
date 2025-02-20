"use client";
import "./Experience.scss";
import { motion } from "motion/react"


export default function Experience() {
  return (
    <motion.section
     initial={{ opacity: 0, y: 15 }}
     whileInView={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.75, ease: "easeIn" }}
     viewport={{ once: true }}
     className="experience"
     id="experience"
    >
        <img src="images/fingerprint.png" alt="fingerprint" className="fingerprint" />
        <h2>Experience</h2>
        <motion.div
         initial={{ opacity: 0, y: 15 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.75, ease: "easeIn" }}
         viewport={{ once: true }}
         className="xp-cards">
            <div className="line"></div>
            
            <div className="card">
                <div className="card-header">
                    <img src="/images/mtech.png" alt="mtech logo" />
                    <p className="s16 w500 italic">Mountainland Technical College</p>
                </div>
                <div className="card-info">
                    <p className="s16 w500">Web Programming & Development Student</p>
                    <p className="s14 w300">
                        Studied: Source Control, HTML, CSS, Bootstrap, and Sass. 
                        Focused primarily on JavaScript, TypeScript, Angular, and React. 
                    </p>
                    <p className="s14 w300">
                    The program also covers back-end essentials: servers, databases,
                     hosting, deployment, security, and automated QA. 
                    </p>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <img src="/images/freelancer.svg" alt="computer icon" />
                    <p className="s16 w500 italic">Freelancer</p>
                </div>
                <div className="card-info">
                    <p className="s16 w500">Freelance Website Developer</p>
                    <p className="s14 w300">
                        I have designed and developed websites for over 12 clients, creating custom solutions that fit their needs.
                    </p>
                    <p className="s14 w300">
                        I have implemented custom designs, responsive layouts, cms systems, forms, and backend functionality to create purposeful and dynamic web experiences.
                    </p>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <img src="/images/light.svg" alt="light bulb" />
                    <p className="s16 w500 italic">Hobbyist</p>
                </div>
                <div className="card-info">
                    <p className="s16 w500">Side Projects</p>
                    <p className="s14 w300">
                        I have built various personal and hobby projects to expand my skills in different programming languages.
                    </p>
                    <p className="s14 w300">
                    My most significant project, Laced.bio, was developed entirely from scratch. I designed a custom UI/UX for the site and implemented both the frontend and backend logic. 
                    </p>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <img src="/images/lonepeak.png" alt="lonepeak logo" />
                    <p className="s16 w500 italic">Lone Peak High School</p>
                </div>
                <div className="card-info">
                    <p className="s16 w500">Web Development Pathway</p>
                    <p className="s14 w300">
                        4.0 GPA
                    </p>
                    <p className="s14 w300">
                    Completed the Web Development CTE pathway by successfully passing Web Development 1 & 2,
                    Computer Programming 1 & 2, and Advanced Computer Programming
                    </p>
                </div>
            </div>
        </motion.div>
    </motion.section>

  );
}
