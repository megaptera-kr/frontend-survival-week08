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
      <label htmlFor="search-input">label</label>
      <input
        id="search-input"
        type="text"
        placeholder={placeholder}
        value={text}
        onChange={handleChange}
      />
    </div>
  );
}
