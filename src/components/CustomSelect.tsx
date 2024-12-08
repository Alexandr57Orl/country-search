import styled from "styled-components";
import Select, { Props as SelectProps } from "react-select";

// Определяем интерфейс для пропсов
interface CustomSelectProps extends SelectProps {
  width?: string; // Добавляем свойство width
}

// Создаем кастомный селект с использованием styled-components
export const CustomSelect = styled(Select).attrs<CustomSelectProps>({
  styles: {
    control: (provided) => ({
      ...provided,
      backgroundColor: `var(--colors-ui-base)`,
      color: `var(--colors-text)`,
      borderRadius: `var(--radii)`,
      padding: `0.25rem`,
      border: `none`,
      boxShadow: `var(--shadow)`,
      height: `35px`,
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: `pointer`,
      color: `var(--colors-text)`,
      backgroundColor: state.isSelected
        ? `var(--colors-bg)`
        : `var(--colors-ui-base)`,
    }),
    singleValue: (provided) => ({
      ...provided,
      color: `var(--colors-text)`,
    }),

    menu: (provided) => ({
      ...provided,
      backgroundColor: `var(--colors-ui-base)`,
    }),
  },
})<CustomSelectProps>`
  width: ${({ width }) => width || "200px"};
  font-family: var(--family);

  & > * {
    box-shadow: var(--shadow);
  }

  & input {
    padding-left: 0.25rem;
  }

  & * {
    color: var(--colors-text);
  }
`;
