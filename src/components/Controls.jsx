import React, { useEffect, useState } from "react";
import { Search } from "./Search";
import { CustomSelect } from "./CustomSelect";
import styled from "styled-components";

const options = [
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Controls = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState(null); // Инициализируем как null

  useEffect(() => {
    const regionValue = region?.value || "";
    onSearch(search, regionValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, region]); // Убедитесь, что onSearch не меняется на каждом рендере

  return (
    <Container>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder="Filter by region"
        isClearable
        isSearchable={false}
        value={region}
        onChange={(selectedOption) => setRegion(selectedOption)} // Упрощаем обработчик изменения
      />
    </Container>
  );
};
