// componente para la tarjeta de cada escena del listado
import MovieSceneDetail from "./MovieSceneDetail";
import { Link } from "react-router-dom";

function ListMovie(props) {
  const listMovies = props.dataMovies.map((movies) => {
    return (
      <Link to={`/movie/${movies.id}`} className="listMovies__Detail">
        <li key={movies.id} className="listMovies__Detail">
          <MovieSceneDetail movies={movies} />
        </li>
      </Link>
    );
  });

  return <ul className="listMovies">{listMovies}</ul>;
}

export default ListMovie;
