import fixtures from "../../../fixtures";
import RestaurantsTable from "./RestaurantsTable";
import restaurants from './../../../fixtures/restaurants';
import { render, screen } from "@testing-library/react";

describe('RestaurantsTable', () => {
    const { restaurants } = fixtures;

    it('renders restaurants', () => {
        render(<RestaurantsTable restaurants={restaurants} />);

        screen.getByText(/메가반점/);
        screen.getByText(/짬뽕/);
        screen.getByText(/2,000원/);
    })
})