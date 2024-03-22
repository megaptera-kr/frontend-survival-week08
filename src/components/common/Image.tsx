import styled from 'styled-components';

type ImgProps = {
  src: string;
  alt: string;
};

const Img = styled.img.attrs<ImgProps>((props) => ({
  src: props.src,
  alt: props.alt,
}))<ImgProps>`
  src: ${(props: ImgProps) => props.src};
  alt: ${(props: ImgProps) => props.alt};
  cursor: pointer;
`;

export default Img;
