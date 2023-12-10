import InputContainer from './InputContainer';

import StyledInput from './StyledInput';

import Icon from './Icon';

import { InputProps } from './types';

function Input({ children }: InputProps) {
  return <InputContainer>{children}</InputContainer>;
}

export default Object.assign(Input, {
  Text: StyledInput,
  Icon,
});
