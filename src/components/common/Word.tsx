import styled from 'styled-components';

type WordProps = {
  text: string;
};

const WordH1 = styled.h1.attrs<WordProps>((props) => ({
  children: props.text,
}))<WordProps>`
  font-size: 8rem;
  text-align: center;
  color: white;
`;

const WordH2 = styled.h2.attrs<WordProps>((props) => ({
  children: props.text,
}))<WordProps>`
  font-size: 6.2rem;
  text-align: center;
  color: white;
`;

export { WordH1, WordH2 };
