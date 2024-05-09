type ResetButtonProps = {
  goToIntro:() => void
}

function ResetButton({ goToIntro }:ResetButtonProps) {
  return <button type="button" onClick={goToIntro}>메인화면으로 돌아가기</button>;
}

export default ResetButton;
