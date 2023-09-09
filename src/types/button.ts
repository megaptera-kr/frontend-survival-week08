import { ButtonHTMLAttributes } from 'react';

export type ButtonProps = {
  type?: ButtonHTMLAttributes<HTMLButtonElement> & 'submit';
}
