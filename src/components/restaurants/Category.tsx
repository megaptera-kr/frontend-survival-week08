type CategoryProps = {
  category: string;
  setCurrentCategory: (text: string) => void;
}

export default function Category({ category, setCurrentCategory }: CategoryProps) {
  return (
    <li>
      <button
        type="button"
        onClick={() => setCurrentCategory(category)}
      >
        {category}
      </button>
    </li>
  );
}
