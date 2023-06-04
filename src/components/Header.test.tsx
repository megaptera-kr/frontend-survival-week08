import { render, screen } from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
    it('헤더 문구가 나타남', () => {
        render(<Header />);

        const displayedImage = document.querySelector("img") as HTMLImageElement;

        expect(displayedImage.src).toContain('logo');

        screen.getByText(/메가테라 푸드코트 키오스크/);
        screen.getByText(/밝게/);
        screen.getByText(/어둡게/);

    })
})