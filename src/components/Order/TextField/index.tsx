import { ReactNode, useRef } from 'react';

type TextFieldProps = {
  label:string|ReactNode;
  placeholder:string;
}

function TextField({ label, placeholder }:TextFieldProps) {
  const id = useRef(`input-${label}`);
  return (
    <div>
      <label htmlFor={id.current}>{label}</label>
      <input id={id.current} type="text" placeholder={placeholder} />
    </div>
  );
}

export default TextField;
