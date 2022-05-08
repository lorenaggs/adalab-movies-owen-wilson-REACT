import "../styles/App.scss";
import "../components/App";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LocalStorage from "../services/LocalStorage";

function MovieScenelItem(props) {
  const [movieItem, setMovieItem] = useState({});

  useEffect(() => {
    if (props.movies === undefined) {
      setMovieItem(LocalStorage.get("MovieSceneItem", {}));
    } else {
      LocalStorage.set("MovieSceneItem", props.movies);
      setMovieItem(props.movies);
    }
  }, []);

  return (
    <>
      <Header />
      <section className="sectionItem">
        <img className="sectionItem__image" src={movieItem.poster} alt="" />
        <section className="sectionItem__contain">
          <section className="sectionItem__contain-info">
            <h2 className="sectionItem__contain-info-movie">
              {movieItem.nameMovie} - {movieItem.year}
            </h2>
            <p className="sectionItem__contain-info-fullLine">
              {movieItem.fullLine}
            </p>
            <a
              className="sectionItem__contain-info-audio"
              target="_blank"
              href={movieItem.linkAudio}
            >
              Escuchar audio
            </a>
          </section>
          <section className="sectionItem__contain-btn">
            <Link to={"/"}>
              <button className="sectionItem__contain-btn-return">
                REGRESAR
              </button>
            </Link>
          </section>
        </section>
      </section>
    </>
  );
}

export default MovieScenelItem;
