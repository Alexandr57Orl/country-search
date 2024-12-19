import React from "react";
import styled from "styled-components";
import { Tooltip } from "./Tooltip";

const Wrapper = styled.article`
  border-radius: var(--radii);
  text-align: center;
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
  color: var(--colors-text);
  cursor: pointer;
  overflow: hidden;
`;
const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;
const CardBody = styled.div`
  padding: 1rem 1.5rem 2rem;
`;

const CardTitle = styled.h3`
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
  margin: 0;
`;
const CartList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0 0;
`;
const CardItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 1.5;
  font-weight: var(--fw-light);
  & > b {
    font-weight: var(--fw-bold);
  }
`;

type CardProps = {
  img: string;
  name: string;
  info: { title: string; description: string }[];
  onClick: () => void;
  visible: boolean;
};

export const Card = ({ img, name, info = [], onClick }: CardProps) => {
  return (
    <Tooltip text={`Открыть карточку ${name}`} visible={false}>
      <Wrapper onClick={onClick}>
        <CardImage src={img} alt="name" />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CartList>
            {info.map((item) => (
              <CardItem key={item.title}>
                <b>{item.title}:</b> {item.description}
              </CardItem>
            ))}
          </CartList>
        </CardBody>
      </Wrapper>
    </Tooltip>
  );
};
