import { render, screen } from "@testing-library/react"
import RestaurantRow from "./RestaurantRow"
import fixtures from "../../../fixtures"

describe('RestaurantRow', () => {
    const restaurant = fixtures.restaurants[0]

    it('renders restaurants information', () => {
        render(<RestaurantRow
            restaurant={restaurant} />);

        screen.getByText(/메가반점/);
        screen.getByText(/짬뽕/);
        screen.getByText(/14,000원/);
    })
})