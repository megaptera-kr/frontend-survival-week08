import styled from 'styled-components';

export default function Header() {
  const NavBar = styled.div`
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `;

  const Title = styled.div`
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 4.8rem;
    font-weight: bold;
    padding-inline: 0.3em;
    color: rgb(255, 255, 255);
    line-height: 150%;
  `;

  const Button = styled.button`
    width: 140px;
    height: 16px;
    padding-block: 1em;
    padding-inline: 0.3em;
    border: 0;
    border-radius: 2em;
    color: rgb(255, 255, 255);
    background-color: rgb(255, 164, 84);
    cursor: pointer;
    box-sizing: inherit;
    
    span {
      padding: 0.7em 0.7em;
      border-radius: 3em;
      color: rgb(0, 0, 0);
      background-color: rgb(255, 255, 255);
      transition: all 0.1s ease 0s;
    }
  `;

  return (
    <NavBar>
      <Title>
        <img src="../../static/images/logo.png" alt="logo" />
        <h1>메가테라 푸드코트 키오스크</h1>
      </Title>
      <Button type="button">
        <span>밝게</span>
        <span>어둡게</span>
      </Button>
    </NavBar>
  );
}
