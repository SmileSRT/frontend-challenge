import type { FC } from "react";
import { Route, Routes } from "react-router";
import { pathnames } from "./pathnames";
import HomePage from "../pages/home";
import FavoritesPage from "../pages/favorites";

export const App: FC = () => {
  return (
    <Routes>
      <Route path={pathnames.HOME} element={<HomePage />} />
      <Route path={pathnames.FAVORITES} element={<FavoritesPage />} />
    </Routes>
  );
};

export default App;
