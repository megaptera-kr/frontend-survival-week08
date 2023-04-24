import styled from 'styled-components';
import { useDarkMode } from 'usehooks-ts';

const BtnWrap = styled.div<{mode:boolean}>`
    display:flex;
    align-items:center;
    margin-left:auto;
    padding: 10px;
    height: 64px;
    width: 208px;
    left: 0px;
    top: 0px;
    background-color:${(props) => (props.mode ? '#606060' : '#FFA454')};
    border-radius: 30px;
  `;

const Button = styled.button<{mode:boolean}>`
    height: 51.20000457763672px;
    width: 98.73416900634766px;
    left: 4.952392578125px;
    top: 6.399993896484375px;
    border-radius: 30px;
    background: ${(props) => (props.mode ? 'none' : 'white')};
    font-family: Pretendard;
    font-size: 20px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.03em;
    text-align: center;
  `;

export default function DayNightBtn() {
  const { isDarkMode, toggle } = useDarkMode();

  const changeDayNight = (e: { target: { innerText: string; }; }) => {
    if (e.target.innerText === '어둡게' && !isDarkMode) toggle();
    if (e.target.innerText === '밝게' && isDarkMode) toggle();
  };

  return (
    <BtnWrap mode={isDarkMode}>
      <Button mode={isDarkMode} type="button" onClick={changeDayNight}>
        밝게
      </Button>

      <Button mode={!isDarkMode} type="button" onClick={changeDayNight}>
        어둡게
      </Button>
    </BtnWrap>
  );
}
