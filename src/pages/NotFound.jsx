import React from "react";
import styled from "styled-components";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Занимает всю высоту экрана */
  background-color: var(--colors-ui-base);
  color: var(--colors-text);
  text-align: center;
`;

const NotFoundTitle = styled.h1`
  font-size: var(--fs-xxl);
  font-weight: var(--fw-bold);
  margin-bottom: 20px;
`;

const NotFoundMessage = styled.p`
  font-size: var(--fs-md);
  margin-bottom: 40px;
`;

const NotFound = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <NotFoundContainer>
      <NotFoundTitle>404 - Страница не найдена</NotFoundTitle>
      <NotFoundMessage>
        К сожалению, запрашиваемая страница не существует.
      </NotFoundMessage>
      <Button onClick={goBack}>
        <IoArrowBack /> Вернуться назад
      </Button>
    </NotFoundContainer>
  );
};

export default NotFound;
