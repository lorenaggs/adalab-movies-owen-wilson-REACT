import "../styles/App.scss";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { matchPath, useLocation } from "react-router";
import getApiData from "../services/GetApi";
import ListMovie from "./ListMovie";
import Filters from "./Filters";
import MovieScenelItem from "./MovieSceneItem";
import Header from "./Header";

function App() {
  // Variables de Estado
  const [dataMovies, setDataMovies] = useState([]);
  const [inputMovie, setInputMovie] = useState("");
  const [filterYear, setFilterYear] = useState("");

  // Trae datos de la API
  useEffect(() => {
    getApiData().then((dataFromApi) => {
      setDataMovies(dataFromApi);
    });
  }, []);

  // función que envia el listado de peliculas
  const handleFilterMovie = (value) => {
    setInputMovie(value);
  };

  // guardo el valor del input para filtrar por año
  const handleFilterYear = (value) => {
    setFilterYear(value);
  };

  // filtro de peliculas por nombre de pelicula
  const moviesFilterName = dataMovies

    .filter((movies) => {
      return inputMovie === ""
        ? true
        : movies.nameMovie.toLowerCase().includes(inputMovie.toLowerCase());
    })
    .filter((movies) => {
      if (filterYear === "") {
        return dataMovies;
      } else {
        return filterYear.includes(movies.year);
      }
    });

  // filter de peliculas por año
  const getYears = () => {
    const yearMovies = dataMovies.map((movies) => movies.year);
    const year = new Set(yearMovies);
    const uniqueYear = [...year];
    return uniqueYear;
  };

  // Manejo de rutas
  const { pathname } = useLocation();
  const dataPath = matchPath("/movie/:movieId", pathname);
  const movieId = dataPath !== null ? dataPath.params.movieId : null;
  const movieFound = dataMovies.find((movies) => movies.id === movieId);

  // Returno de componente APP
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Filters
                handleFilterMovie={handleFilterMovie}
                inputMovie={inputMovie}
                handleFilterYear={handleFilterYear}
                filterYear={filterYear}
                year={getYears()}
              />
              {moviesFilterName.length === 0 && (
                <h2>Ingrese un nombre de película válida</h2>
              )}
              <ListMovie dataMovies={moviesFilterName} />
            </>
          }
        />
        <Route
          path="/movie/:movieId"
          element={<MovieScenelItem movies={movieFound} />}
        />
      </Routes>
    </div>
  );
}

export default App;
