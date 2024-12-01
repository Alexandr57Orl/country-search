import React, { useState } from "react";
import { Controls } from "../components/Controls";
import { List } from "../components/List";
import { Card } from "../components/Card";
import ImageGrid from "../components/Skeleton";
import { useNavigate } from "react-router-dom";
import { useGetCountriesQuery } from "../services/SliceApi";

import { v4 as uuidv4 } from "uuid";

export const Home = () => {
  const navigate = useNavigate();

  const [filteredCountries, setFilteredCountries] = useState([]);

  const { data: countries = [], isLoading, isError } = useGetCountriesQuery();
  if (isLoading) {
    return [...new Array(7)].map(() => <ImageGrid key={uuidv4()} />);
  }
  if (isError) return <div>Error fetching countries.</div>;

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
