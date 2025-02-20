"use client"
import "./Footer.scss";
import { motion } from "motion/react"

export default function Footer() {
    return (
        <motion.footer
         initial={{ opacity: 0}}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 0.75, ease: "easeIn" }}
         viewport={{ once: true }}
         className="footer"
         >
            <div className="container">
                <div className="top">
                    <div className="left">
                        <div className="left-top">
                            <h3 className="roman w400">Camden C.</h3>
                            <p className="w300">camdev.codes@gmail.com</p>
                        </div>
                        <div className="left-bottom">
                            <img src="/images/copyright.svg" alt="copyright" />
                            <p className="s14 w300 gradient">2025 camdev.codes</p>
                        </div>
                    </div>
                    <a className="right" href="#top">
                        <p className="s16 w400">Back To Top</p>
                        <img src="/images/back-arrow.svg" alt="arrow up" />
                    </a>
                </div>
            </div>

        </motion.footer>
    );
}