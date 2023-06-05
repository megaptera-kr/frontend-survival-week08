import { fireEvent, render, screen } from "@testing-library/react";
import Category from "./Category";

describe('Category', () => {
    const categories = ['한식', '일식', '중식'];
    const setFilterCategory = jest.fn();

    function renderCategory() {
        render(<Category
            categories={categories}
            setFilterCategory={setFilterCategory}
        />);
    }

    beforeEach(() => {
        jest.clearAllMocks();
    })

    it('renders all categories', () => {
        renderCategory();

        categories.forEach(category => {
            screen.getByText(category);
        })
    })

    it('listens for category click event', () => {
        renderCategory();

        fireEvent.click(screen.getByText('한식'));

        expect(setFilterCategory).toBeCalledWith('한식');
    })
})