"use client"
import "./Languages.scss";
import { data } from "./data/languages";
import { motion } from "motion/react"

export default function Languages() {
  return (
    <motion.section
     initial={{ opacity: 0, y: 15 }}
     whileInView={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.75, ease: "easeIn" }}
     viewport={{ once: true }}
     className="languages"
     >
        <h2>Languages <span className="gradient">/</span> Libraries</h2>
        <div className="badges">
            {data.languages.map((language, index) => (
                <div className="badge" key={index}>
                    <img src={language.image} />
                    <p className="s14">{language.name}</p>
                </div>
            ))}
        </div>
    </motion.section>

  );
}
