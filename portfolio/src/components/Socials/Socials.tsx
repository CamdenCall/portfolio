import "./Socials.scss";

export default function Socials() {
  return (
    <section className="socials">
        <div className="header">
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
                    <a className="social">
                        <img src="/images/Socials/github.svg" alt="github" />
                        <p className="s12 w500">Github</p>
                    </a>
                    <div className="spacer"></div>
                </div>
                <div className="social-container">
                    <div className="spacer"></div>
                    <a className="social">
                        <img src="/images/Socials/upwork.svg" alt="upwork" />
                        <p className="s12 w500">Upwork</p>
                    </a>
                    <div className="spacer"></div>
                </div>
                <div className="social-container">
                    <div className="spacer"></div>
                    <a className="social">
                        <img src="/images/Socials/dribbble.svg" alt="dribbble" />
                        <p className="s12 w500">Dribbble</p>
                    </a>
                    <div className="spacer"></div>
                </div>
                <div className="social-container">
                    <div className="spacer"></div>
                    <a className="social">
                        <img src="/images/Socials/resume.svg" alt="resume" />
                        <p className="s12 w500">Resume</p>
                    </a>
                    <div className="spacer"></div>
                </div>
            </div>
        </div>
    </section>

  );
}
