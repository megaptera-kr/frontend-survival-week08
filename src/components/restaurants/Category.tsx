type CategoryProps = {
    categories: string[];
    setFilterCategory: (text: string) => void;
}

export default function Category({
    categories, setFilterCategory
}: CategoryProps) {
    return (
        <div>
            <ul>
                {
                    ['전체', ...categories].map(category => (
                        <li
                            key={category}
                            onClick={() => setFilterCategory(category)}
                        >
                            {category}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}