import TextField from '../common/TextField';

type FilterTextFieldProps = {
  text: string;
  setText: (text: string) => void;
}

export default function FilterTextField({ text, setText }: FilterTextFieldProps) {
  return (
    <TextField
      placeholder="식당이름을 입력해주세요"
      text={text}
      setText={setText}
    />
  );
}
