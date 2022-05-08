// componente para el detalle de cada escena del listado

function MovieSceneDetail(props) {
  return (
    <>
      <img
        className="listMovies__Detail-image"
        src={props.movies.poster}
        alt=""
      />
      <h2 className="listMovies__Detail-title">
        {props.movies.nameMovie} - {props.movies.year}
      </h2>
      <p className="listMovies__Detail-fullName">{props.movies.fullLine}</p>
    </>
  );
}

export default MovieSceneDetail;
