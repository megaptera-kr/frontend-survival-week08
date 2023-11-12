import { useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
   padding-inline: ${(props) => props.theme.sizes.contentPadding};
   label {
     display: none;
   }
   input {
     border: 2px solid ${(props) => props.theme.colors.textFieldBorder};
     border-radius: 2rem;
     width: 102rem;
     height: 8rem;
     background: url(./images/icon-search.png) 98% 50% / 4rem no-repeat;
     color: ${(props) => props.theme.colors.secondary};
     font-size: 3.2rem;
     font-weight: 400;
     padding-left: ${(props) => props.theme.sizes.contentPadding};
     margin-top: 3rem;
     margin-bottom: 4rem;
   }
   input::placeholder {
     color: ${(props) => props.theme.colors.secondary};
   }
   input:focus {
     outline: none;
     border: 2px solid #CECECE;
   }
 `;

 type TextFieldProps = {
   label: string;
   placeholder: string;
   text: string;
   setText: (value: string) => void
 }

export default function TextField({
  label, placeholder, text, setText,
}: TextFieldProps) {
  const id = useRef(`input-${Math.random()}`);

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setText(value);
  };

  return (
    <Container>
      <label htmlFor={id.current}>
        {label}
      </label>
      <input
        id={id.current}
        type="text"
        placeholder={placeholder}
        value={text}
        onChange={handleChange}
      />
    </Container>
  );
}
