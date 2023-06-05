import { fireEvent, render, screen } from "@testing-library/react"
import TextField from "./TextField"

describe('TextField', () => {
    const text = '메가반점'

    const setText = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    })

    function renderTextField() {
        render(<TextField
            text={text}
            setText={setText}
        />);
    }

    it('renders elements', () => {
        renderTextField();

        screen.getByPlaceholderText(/식당이름을 입력해주세요/);
        screen.getByDisplayValue(text);
    })

    it('listens for input change event', () => {
        renderTextField();

        fireEvent.change(screen.getByPlaceholderText(/식당이름을 입력해주세요/), {
            target: {
                value: 'New Brand'
            }
        });

        expect(setText).toBeCalledWith('New Brand')
    })
})