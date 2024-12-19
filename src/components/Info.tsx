import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
// @ts-ignore
import { filterByCode } from "../config";

// Стили компонентов
const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;

  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;

const InfoImage = styled.img`
  display: block;
  width: 100%;
  height: auto; // Изменено на auto для правильного отображения
`;

const InfoTitle = styled.h1`
  margin: 0;
  font-weight: var(--fw-normal);
`;

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  line-height: 1.8;

  & > b {
    font-weight: var(--fw-bold);
  }
`;

const Meta = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;

  align-items: flex-start;

  & > b {
    font-weight: var(--fw-bold);
  }

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`;

const TagGroup = styled.div`
  display: flex;

  gap: 1rem;

  flex-wrap: wrap;
`;

const Tag = styled.span`
  padding: 0.5rem; // Увеличен отступ для лучшего восприятия
  background-color: var(--colors-ui-base);

  box-shadow: var(--shadow);

  line-height: 1.5;

  cursor: pointer;
`;

// Интерфейсы для валют и языков
interface Currency {
  name: string;
  symbol?: string; // symbol может быть необязательным
}

interface Language {
  name: string;
}

// Основной интерфейс для пропсов компонента Info
interface IInfoProps {
  name: string;
  nativeName?: string; // nativeName может быть необязательным
  flag?: string; // flag может быть необязательным
  capital?: string; // capital может быть необязательным
  population?: number; // population может быть необязательным
  region?: string; // region может быть необязательным
  subregion?: string; // subregion может быть необязательным
  topLevelDomain?: string[]; // topLevelDomain может быть необязательным
  currencies?: Currency[]; // currencies может быть необязательным
  languages?: Language[]; // languages может быть необязательным
  borders?: string[]; // borders может быть необязательным
  push?: (path: string) => void; // push - функция навигации
}

// Компонент Info
export const Info = (props: IInfoProps) => {
  const {
    name,
    nativeName,
    flag,
    capital,
    population,
    region,
    subregion,
    topLevelDomain = [],
    currencies = [],
    languages = [],
    borders = [],
    push,
  } = props;

  const [neighbors, setNeighbors] = useState<string[]>([]); // Указываем тип для neighbors

  useEffect(() => {
    if (borders.length) {
      axios
        .get(filterByCode(borders))
        .then(({ data }) =>
          setNeighbors(data.map((c: { name: string }) => c.name))
        )
        .catch((error) =>
          console.error("Error fetching border countries:", error)
        ); // Обработка ошибок
    }
  }, [borders]);

  return (
    <Wrapper>
      {flag && <InfoImage src={flag} alt={name} />}{" "}
      {/* Проверка на наличие флага */}
      <div>
        <InfoTitle>{name}</InfoTitle>
        <ListGroup>
          <List>
            <ListItem>
              <b>Native Name:</b> {nativeName}
            </ListItem>
            <ListItem>
              <b>Population:</b> {population}
            </ListItem>
            <ListItem>
              <b>Region:</b> {region}
            </ListItem>
            <ListItem>
              <b>Sub Region:</b> {subregion}
            </ListItem>
            <ListItem>
              <b>Capital:</b> {capital}
            </ListItem>
          </List>
          <List>
            <ListItem>
              <b>Top Level Domain:</b>{" "}
              {topLevelDomain.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </ListItem>
            <ListItem>
              <b>Currencies:</b>{" "}
              {currencies.map((c) => (
                <span key={c.name}>{c.name} </span> // Используйте уникальный ключ
              ))}
            </ListItem>
            <ListItem>
              <b>Languages:</b>{" "}
              {languages.map((l) => (
                <span key={l.name}>{l.name}</span> // Используйте уникальный ключ
              ))}
            </ListItem>
          </List>
        </ListGroup>
        <Meta>
          <b>Border Countries:</b>
          {!borders.length ? (
            <span>There are no border countries</span>
          ) : (
            <TagGroup>
              {neighbors.map((b) => (
                <Tag key={b} onClick={() => push && push(`/country/${b}`)}>
                  {b}
                </Tag>
              ))}
            </TagGroup>
          )}
        </Meta>
      </div>
    </Wrapper>
  );
};
