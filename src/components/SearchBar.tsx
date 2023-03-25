type SearchBarProps = {
  filterText: string;
  setFilterText: (text: string) => void;
  placeholder: string;
}

export default function SearchBar({
  filterText,
  setFilterText,
  placeholder,
}: SearchBarProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterText(value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={filterText}
        onChange={handleChange}
      />
    </div>
  );
}
