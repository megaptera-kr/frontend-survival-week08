import styled from 'styled-components';
import useRestaurantStore from '../../hooks/useRestaurantStore';

const TextFiledContainer = styled.div`
  margin: 0 3rem 4rem;
  label {
    display: none;
  }
  input {
    width: 100%;
    border-radius: 1.5rem;
    border: 0.1rem solid ${(props) => props.theme.colors.main.border};
    padding: 1.6rem;
    background: url(./images/icon-search.png) 98% 50% / 4rem no-repeat;
    font-size: 3.2rem;
    color: ${(props) => props.theme.colors.main.text};
    &::placeholder {
      color: ${(props) => props.theme.colors.main.text};
    }
    &:focus {
      outline: 0.2rem solid ${(props) => props.theme.colors.main.border};
    }
  }
`;

type Props = {
  placeholder: string;
}
export default function TextFiled({ placeholder }: Props) {
  const [{ filteredText }, store] = useRestaurantStore();
  return (
    <TextFiledContainer>
      <label
        htmlFor="search-input"
      >
        검색
      </label>
      <input
        placeholder={placeholder}
        type="text"
        id="search-input"
        value={filteredText}
        onChange={
          (e:React.ChangeEvent<HTMLInputElement>) => (
            store.search(e.target.value)
          )
        }
      />
    </TextFiledContainer>
  );
}
