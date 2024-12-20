import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import NotFound from "./pages/NotFound";
import Details from "./pages/Details";
import { Header } from "./components/Header.tsx";
import { Main } from "./components/Main.tsx";
import { useState } from "react";

export function App() {
  const [countries, setCountries] = useState([]);
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route
            path="/"
            element={<Home countries={countries} setCountries={setCountries} />}
          />
          <Route path="/details/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}
