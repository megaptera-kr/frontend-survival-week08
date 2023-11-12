import styled from 'styled-components';

const Container = styled.div`
  padding-block: 1em 2em;

  label {
    display: none;
  }

  input {
    font-size: 3.2rem;
    padding: .5em;
    width: 100%;
    border: 1px solid ${(props) => props.theme.colors.textFieldBorder};
    border-radius: 1.5rem;
    background: url("/images/icon-search.png") no-repeat 98% 50% / 4rem;
    color: #FFFFFF;
  }

  input::placeholder {
    color: #FFFFFF;
  }
`;

type TextFieldProps = {
  labelText: string
  placeholder: string
  filterText: string
  setFilterText: (value: string) => void
}

export default function TextField({
  labelText,
  placeholder,
  filterText,
  setFilterText,
}: TextFieldProps) {
  const id = `input-${labelText}`;

  const handleChangeFilterText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setFilterText(value);
  };

  return (
    <Container>
      <label
        style={{ marginRight: '1rem' }}
        htmlFor={id}
      >
        {labelText}
      </label>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        value={filterText}
        onChange={handleChangeFilterText}
      />
    </Container>
  );
}
