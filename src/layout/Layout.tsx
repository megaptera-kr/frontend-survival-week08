import { Outlet } from 'react-router';
import styled from 'styled-components';
import { useDarkMode } from 'usehooks-ts';

const Div = styled.div`
width : 1080px;
margin : auto;
background-color: ${(props) => (props.theme.colors.clientBackground)};
header{
  padding : 1rem;
  div{
    display:flex;
    justify-content: space-between;

    h1{
      font-size:4.8rem;
      font-weight:bold;

      img{
        height: 60px;
      }
    }
    button{
      border : none;
      border-radius : 30px;
      height : 43px;
      background : rgba( 255, 255, 255, 0.5 );
      span{
        padding: 0px 20px 0px 20px;
        border-radius : 30px;
        /* border : 2px solid #222; */
        padding : 1rem;
        color : ${(props) => (props.theme.colors.font)}
      }
      .bright{
        background : ${(props) => (props.theme.colors.toggle)}
      }
      .dark{
        background : ${(props) => (props.theme.colors.toggle2)}
      }
    }
  }
}
`;

export default function Layout() {
  const { isDarkMode, toggle } = useDarkMode();
  function handleClick() {
    toggle();
  }
  return (
    <Div>
      <header>
        <div>
          <h1>
            <img src="/images/logo.png" alt="" />
            메가테라 푸드코트 키오스크
          </h1>
          <button type="button" onClick={handleClick}>
            <span className="bright">밝게</span>
            <span className="dark">어둡게</span>
          </button>
        </div>
      </header>
      <Outlet />
    </Div>
  );
}
