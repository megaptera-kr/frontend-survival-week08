import { render, screen } from "@testing-library/react"
import Restaurants from "."

const context = describe;

describe('Restaurants', () => {
    it('renders without crash', () => {
        render(<Restaurants />);
    })
})