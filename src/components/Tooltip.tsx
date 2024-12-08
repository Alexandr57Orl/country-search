import React from "react";
import styled from "styled-components";

type TPropsTooltip = {
  children: React.ReactNode;
  text: string;
  visible: boolean;
};

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipBox = styled.div<{ visible: boolean }>`
  position: absolute;
  background-color: black;
  color: white;
  padding: 5px;
  border-radius: 5px;
  top: 100%;
  left: 50%;
  width: max-content;
  transform: translateX(-50%);
  display: ${(props) => (props.visible ? "block" : "none")};
  z-index: 10;
`;

const TooltipArrow = styled.span`
  position: absolute;
  top: -10px;
  left: 50%;
  margin-left: -5px; /* Центрируем стрелку */
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent black transparent;
`;

export const Tooltip = (props: TPropsTooltip) => {
  const { children, text } = props;
  const [visible, setVisible] = React.useState<boolean>(false);
  return (
    <TooltipContainer>
      <TooltipBox visible={visible}>
        {text} <TooltipArrow />
      </TooltipBox>
      <div
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {children}
      </div>
    </TooltipContainer>
  );
};
