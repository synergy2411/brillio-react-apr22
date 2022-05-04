import { render, screen } from '@testing-library/react';
import Async from './Async';
import axios from 'axios';

describe("Async Component", () => {
    test("render list items", async () => {
        
        const response = {data : [{id : "C001", name : "john"}]}

        // jest.mock('axios');
        // axios.get.mockResolvedValue(response);
        jest.spyOn(axios, "get").mockResolvedValue(response)

        render(<Async />)
        const listItems = await screen.findAllByRole("listitem")
        expect(listItems).not.toHaveLength(0)
    })
})