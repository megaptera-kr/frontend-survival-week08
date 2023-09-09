import styled from 'styled-components';
import TextField from '../common/TextField';

const TextFieldWrap = styled.div`
  padding: 1em 0 2em;

  & label {
    display: none;
  }

  & input {
    width: 100%;
    padding: 0.5em;
    border: 1px solid ${(props) => props.theme.colors.searchInputBorder};
    border-radius: 1.5rem;
    font-size: 3.2rem;
    color: ${(props) => props.theme.colors.text};
    background: no-repeat 98% 50% / 4rem url('/images/icon-search.png');
  }

  & input::placeholder {
    color: ${(props) => props.theme.colors.text}
  }
`;

type FilterTextFieldProps = {
  text: string;
  setText: (text: string) => void;
}

export default function FilterTextField({ text, setText }: FilterTextFieldProps) {
  return (
    <TextFieldWrap>
      <TextField
        placeholder="식당 이름을 입력해주세요"
        text={text}
        setText={setText}
      />
    </TextFieldWrap>
  );
}
