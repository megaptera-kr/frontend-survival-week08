import { ChangeEvent, ReactNode, useRef } from 'react';

type TextFieldProps = {
  label:string|ReactNode;
  placeholder:string;
  filterText:string;
  setFilterText:(text:string) => void
}

function TextField({
  label,
  placeholder,
  filterText,
  setFilterText,
}:TextFieldProps) {
  const id = useRef(`input-${label}`);
  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterText(value);
  };
  return (
    <div>
      <label htmlFor={id.current}>{label}</label>
      <input
        id={id.current}
        type="text"
        placeholder={placeholder}
        value={filterText}
        onChange={handleChange}
      />
    </div>
  );
}

export default TextField;
