import styled from 'styled-components';

type ImgProps = {
  src: string;
  alt: string;
};

const Image = styled.img.attrs<ImgProps>((props) => ({
  src: props.src,
  alt: props.alt,
}))<ImgProps>`
  src: ${(props: ImgProps) => props.src};
  alt: ${(props: ImgProps) => props.alt};
`;

export default Image;
