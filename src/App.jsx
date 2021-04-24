import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import "./styles.css";
import AppBar from "./components/AppBar";
import routes from "./routes";
import Loader from "./components/Loader";

// Чанкование - загрузка js частями:
const HomePage = lazy(() => import("./views/HomePage"));
const MoviesPage = lazy(() => import("./views/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./views/MovieDetailsPage"));

class App extends React.Component {
  render() {
    return (
      <>
        <AppBar />

        <Suspense fallback={<Loader isLoading={true} />}>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route exact path={routes.movies} component={MoviesPage} />
            <Route path={routes.movieDetails} component={MovieDetailsPage} />
            <Route component={HomePage} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
