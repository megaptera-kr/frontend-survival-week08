import styled from 'styled-components';
import useMenuStore from '../../hooks/useMenuStore';
import type Restaurant from '../../types/Restaurant';
import type Food from '../../types/Food';

const FilteredTableWrapper = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.background};
  border-radius: 0px 80px 0px 0px;
  box-sizing: border-box;
  padding: 80px 50px;

  table{
    display: table-row-group;
    flex-direction: row;
  }

  tr {
    font-family: Pretendard-Regular;
    display: flex;
    flex-direction: column;
    padding-block: 3em;
    color: ${(props) => props.theme.colors.tableText};
    border-bottom: 1px solid ${(props) => props.theme.colors.tableBorder};
  }

  tr:last-of-type {
    border-bottom: none;
  }

  table td:first-of-type {
    margin-bottom: 20px;
    font-size: 48px;
    text-align: start;
  }

  table td > ul {
    display: flex;
    flex-direction: row;
    gap: 25px;
  }

  table li {
    border: 3px solid ${(props) => props.theme.colors.tableButton};
    border-radius: 40px;
    background: ${(props) => props.theme.colors.tableButton};
    button {
      width: 310px;
      box-sizing: border-box;
      padding: 40px 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      border: none;
      background: transparent;
      font-size: 32px;
      color: ${(props) => props.theme.colors.tableText};
    }
    img {
      width: 200px;
      height: 200px;
      margin-bottom: 30px;
    }

    span {
      width: 100%;
      display: block;
      text-align: start;
    }
    span + span {
      margin-top: 10px;
    }
  }
  table li:hover {
    border: ${(props) => props.theme.colors.tableButtonHoverBorder};
    background: ${(props) => props.theme.colors.buttonHover};
  }
`;

export default function FilteredTable({ data }: { data: Restaurant[] }) {
  const [, store] = useMenuStore();

  const handleClick = (food:Food) => {
    store.addMenu(food);
  };

  return (
    <FilteredTableWrapper>
      <table>
        <tbody>
          {
            data.map((item: Restaurant) => (
              <tr key={item.id}>
                <td>
                  {item.name}
                </td>
                <td>
                  <ul>
                    {
                      item.menu.map((menu: Food) => (
                        <li key={menu.id}>
                          <button type="button" onClick={() => handleClick(menu)}>
                            <img src={menu.image} alt="menuImage" />
                            <span>{menu.name}</span>
                            <span>
                              {menu.price.toLocaleString()}
                              원
                            </span>
                          </button>

                        </li>
                      ))
                    }
                  </ul>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </FilteredTableWrapper>
  );
}
