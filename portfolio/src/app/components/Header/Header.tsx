import "./Header.scss";


export default function Home() {
  return (
    <header className="header">
        <div className="header-text">
            <img src="/images/logo.png" alt="logo" />
            <h1>CAMDEN C.</h1>
            <p>UI/UX Desinger & Fullstack Web Developer</p>
        </div>
        <img src="images/star-arrow.svg" alt="arrow" />
    </header>

  );
}
