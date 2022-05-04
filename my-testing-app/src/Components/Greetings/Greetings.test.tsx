import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greetings from './Greetings';

describe("Greetings Component", () => {
    test("renders the heading as 'Hi there", () => {
    
        // Arrange
        render(<Greetings/>)
        const headingElement = screen.getByText("Hi there",{exact : false})
        // Act
        // .... nothing
    
        // Assert
        expect(headingElement).toBeInTheDocument()
    
    })
    
    
    test("renders the paragraph as 'good to see you' when the button is clicked", () => {
        // Arrange
        render(<Greetings />)
        const buttonEl = screen.getByRole("button")

        // Act
        userEvent.click(buttonEl)
        // Assert
        const paragrahEl = screen.getByText('good to see you', {exact : false})
        expect(paragrahEl).toBeInTheDocument()
    })

    test("does not render paragraph 'good to see you' when buttin is NOT clicked", () => {
        render(<Greetings/>)
        const paragrahEl = screen.queryByText('good to see you', {exact : false})
        expect(paragrahEl).toBeNull()
    })

})