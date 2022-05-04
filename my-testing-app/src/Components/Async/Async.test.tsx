import { render, screen } from '@testing-library/react';
import Async from './Async';

describe("Async Component", () => {
    test("render list items", async () => {
        render(<Async />)
        const listItems = await screen.findAllByRole("listitem")
        expect(listItems).not.toHaveLength(0)
    })
})