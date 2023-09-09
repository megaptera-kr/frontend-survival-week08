import { ChangeEvent } from 'react';

type TextFieldProps = {
  placeholder: string;
  text: string;
  setText: (text: string) => void;
}

export default function TextField({ placeholder, text, setText }: TextFieldProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setText(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={text}
        onChange={handleChange}
      />
      <span>여기에 아이콘</span>
    </div>
  );
}
