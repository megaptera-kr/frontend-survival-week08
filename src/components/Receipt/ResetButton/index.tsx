import styled from 'styled-components';
import StyledButton from '../../Button';

type ResetButtonProps = {
  goToIntro:() => void
}

const StyledResetButton = styled(StyledButton)`
  width:100%;
  height:100px;
  margin-bottom:40px;
  border-radius: 80px;
  color:${(props) => props.theme.colors.title};
  font-size:${(props) => props.theme.fontSize.md};
  background-color:${(props) => props.theme.colors.primary};
`;

function ResetButton({ goToIntro }:ResetButtonProps) {
  return <StyledResetButton onClick={goToIntro}>메인화면으로 돌아가기</StyledResetButton>;
}

export default ResetButton;
