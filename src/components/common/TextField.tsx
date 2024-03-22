/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
import React from 'react';

import styled, { css } from 'styled-components';

const TextFiledInputStyle = styled.input`
  width: 100%;
  height: 8rem;
  color: #fff;
  background-image: url('/images/icon-search.png');
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center right 2rem;
  background-size: 4rem;
  padding: 0 3rem;
  border-radius: 2rem;
  font-size: 3.2rem;
  border: 1px solid ${(props) => props.theme.input.border};

  &::placeholder {
    color: #fff;
  }

  ${(props) =>
    props.theme.themeChk === 'darkThem' &&
    css`
      background-image: url('/images/icon-search-dark.svg');
    `}
`;

type TextFieldProps = {
  placeholder: string;
  text: string;
  setText: (value: string) => void;
};

export default function TextField({
  placeholder,
  text,
  setText,
}: TextFieldProps) {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setText(value);
  };

  return (
    <TextFiledInputStyle
      type="text"
      placeholder={placeholder}
      value={text}
      onChange={handleOnChange}
    />
  );
}
