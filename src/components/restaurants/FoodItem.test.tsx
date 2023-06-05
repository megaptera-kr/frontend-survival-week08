import { render, screen } from "@testing-library/react";
import fixtures from "../../../fixtures"
import FoodItem from "./FoodItem";

describe('FoodItem', () => {
    const { food } = fixtures;

    it('renders foodItem', () => {
        render(<FoodItem food={food} />);

        const displayedImage = document.querySelector("img") as HTMLImageElement;

        expect(displayedImage.src).toContain('food1');
        screen.getByText(/짜장면/);
        screen.getByText(/8,000원/);
    })
})