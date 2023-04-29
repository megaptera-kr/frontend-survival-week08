/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import { HTMLAttributes } from 'react';
import * as S from './Button.styled';

export type ButtonVariant = 'active' | 'cancel';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement>{
  variant?: ButtonVariant;
  label: string;
}

export default function Button({ variant = 'active', label, ...buttonProps }: ButtonProps) {
  return <S.Button {...buttonProps} variant={variant}>{label}</S.Button>;
}
