import "./Header.scss";


export default function Header() {
  return (
    <header className="header">
        <div className="header-text">
            <img src="/images/logo.png" alt="logo"/>
            <h1 className="gradient">CAMDEN C.</h1>
            <p className="s18">UI/UX Desinger & Fullstack Web Developer</p>
        </div>
        <img src="images/star-arrow.svg" alt="arrow" />
    </header>

  );
}
