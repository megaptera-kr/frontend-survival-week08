/* eslint-disable react/require-default-props */
import * as S from './Badge.styled';

interface BadgeProps {
  className?: string;
  label: string;
}

export default function Badge({ className, label }: BadgeProps) {
  return <S.Badge className={className}>{label}</S.Badge>;
}
