import "./Languages.scss";
import { data } from "./data/languages";

export default function Languages() {
  return (
    <section className="languages">
        <h2>Languages <span className="gradient">/</span> Libraries</h2>
        <div className="badges">
            {data.languages.map((language, index) => (
                <div className="badge" key={index}>
                    <img src={language.image} />
                    <p className="s14">{language.name}</p>
                </div>
            ))}
        </div>
    </section>

  );
}
