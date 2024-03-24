import styled from 'styled-components';

const ButtonStyle = styled.button`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 59rem;
  margin-inline: 2.5%;
  background-color: ${(props) => props.theme.colors.orderBtnBg};
  border: 1px solid ${(props) => props.theme.colors.orderBtnBg};
  border-radius: 2rem;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.orderBtnHover};
    border: 1px solid ${(props) => props.theme.colors.orderBtnHoverBorder};
  }

  h4 {
    color: ${(props) => props.theme.colors.textPrimary};
    font-family: ${(props) => props.theme.fonts.fontFamily};
    font-size: 4.8rem;
    margin-top: 6rem;
  }

  img {
    max-width: 20rem;
  }
`;

type OrderButtonProps = {
  text: string;
  src: string;
  onClick: () => void;
};

export default function OrderButton({ text, src, onClick }: OrderButtonProps) {
  return (
    <ButtonStyle onClick={onClick}>
      <img src={`/images/${src}`} alt={`${text}_이미지`} />
      <h4>{text}</h4>
    </ButtonStyle>
  );
}
