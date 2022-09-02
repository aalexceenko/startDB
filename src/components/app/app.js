import React from "react";

import Header from '../header';
import Greeting from "../greeting";
import RandomPlanet from '../random-planet';
import { SwapiServiceProvider } from "../swapi-service-context";
import SwapiService from "../../services/swapi-service";

import {
        StarshipsPage,
        PeoplePage,
        PlanetsPage,
        LoginPage,
        SecretPage
} from "../pages";
import StarshipDetails from "../sw-components/starship-details";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './app.css';

const App = () => {
  const swapiService = new SwapiService();

    return (
      <div>
        <SwapiServiceProvider value={swapiService}>
          <Router>

            <Header /> 
            <RandomPlanet />

            <Routes>
              <Route path="/" element={<Greeting />} />
              <Route>
                <Route path="people/:id" element={<PeoplePage />} />
                <Route path="/people" element={<PeoplePage />} />
              </Route>
              <Route path="/planets" element={<PlanetsPage />} />
              <Route path="/starships/" element={<StarshipsPage />} exact/>
              <Route path="/starships/:id" element={<StarshipDetails />} />
              <Route path="/login" element={<LoginPage />} />

              <Route
                path="/secret"
                element={
                  <RequireAuth>
                    <SecretPage />
                  </RequireAuth>
                }
              />
               <Route path="*" element={<p>this url doesn't exist</p>} />
            </Routes>

          </Router>

        </SwapiServiceProvider>
      </div>
    )
  }

  function useAuth() {

    return true;
  }

  const RequireAuth = ({ children }) => {
    const auth = useAuth();

    return auth ? children : <Navigate to="/login" />;
  }

export default App;