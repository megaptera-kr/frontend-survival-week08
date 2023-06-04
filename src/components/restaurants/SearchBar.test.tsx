import { render, screen } from "@testing-library/react"
import SearchBar from "./SearchBar"



describe('SearchBar', () => {
    const categories = ['한식', '일식', '중식'];

    const setFilterText = jest.fn();
    const setFilterCategory = jest.fn();

    function renderSearchBar() {
        render(<SearchBar
            categories={categories}
            filterText=""
            setFilterText={setFilterText}
            setFilterCategory={setFilterCategory}
        />
        )
    }

    it('renders search label text', () => {
        renderSearchBar();

        screen.getByPlaceholderText(/식당이름을 입력해주세요/)
    })

    it('renders all category', () => {
        renderSearchBar();

        screen.getByText(/전체/);

        categories.forEach(category => {
            screen.getByText(category);
        })

    })
})