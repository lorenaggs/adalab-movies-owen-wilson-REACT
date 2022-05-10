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
  const [filterFullName, setFilterFullName] = useState("");
  const [filterLong, setFilterLong] = useState("");
  const [filterWow, setFilterWow] = useState("");
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

  const handleFilterFullName = (value) => {
    setFilterFullName(value);
  };

  const handleFilterWow = (value) => {
    setFilterWow(value);
  };
  const handleFilterLong = (value) => {
    setFilterLong(value);
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
    })
    .filter((movies) => {
      return filterFullName === ""
        ? true
        : movies.fullLine.toLowerCase().includes(filterFullName.toLowerCase());
    })
    .filter((movies) => {
      return filterWow === ""
        ? true
        : parseInt(movies.total_wows_in_movie) === parseInt(filterWow);
    })
    .filter((movies) => {
      return filterLong === ""
        ? true
        : movies.fullLine.length === parseInt(filterLong);
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

                handleFilterFullName={handleFilterFullName}
                filterFullName={filterFullName}
                
                handleFilterWow={handleFilterWow}
                filterWow={filterWow}
                
                handleFilterLong={handleFilterLong}
                filterLong={filterLong}
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
