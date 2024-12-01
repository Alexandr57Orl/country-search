import React, { useState, useEffect } from "react";
import { Controls } from "../components/Controls";
import { List } from "../components/List";
import { Card } from "../components/Card";
import { ALL_COUNTRIES } from "../config";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  const stepCard = (c) => {
    navigate(`/details/${c.name}`);
  };

  const handleSearch = (search, region) => {
    const filteredData = countries.filter((country) => {
      const matchesRegion = region ? country.region === region : true;
      const matchesSearch = search
        ? country.name.toLowerCase().includes(search.toLowerCase())
        : true;

      return matchesRegion && matchesSearch;
    });

    setFilteredCountries(filteredData);
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(ALL_COUNTRIES);
        const data = await response.json();
        setCountries(data);
        setFilteredCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []); // Пустой массив зависимостей

  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {filteredCountries.map((c) => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name,
            info: [
              {
                title: "Population",
                description: c.population.toLocaleString(),
              },
              {
                title: "Region",
                description: c.region,
              },
              {
                title: "Capital",
                description: c.capital,
              },
            ],
          };
          return (
            <Card key={c.name} onClick={() => stepCard(c)} {...countryInfo} />
          );
        })}
      </List>
    </>
  );
};
