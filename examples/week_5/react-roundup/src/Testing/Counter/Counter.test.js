import { fireEvent, render } from "@testing-library/react"
import Counter from "./Counter"
import { count } from "console"

describe("Counter tests", () => {
    test('renders initial count and button', () => {
        // AAA

        const {getByText} = render(<Counter/>)

        // Check if the component renders with an initial count of 0

        const countElement = getByText("Count: 0");
        expect(countElement).toBeInTheDocument();

        // check if the increment and decrement buttons are there
        const incButton = getByText("Increment");
        const decButton = getByText("Decrement");


        expect(incButton).toBeInTheDocument();
        expect(decButton).toBeInTheDocument();
    })

    test("increment and decrement button causes the count to change when clicked", () => {
        // arrange
        const {getByText} = render(<Counter/>);

        const countElement = getByText("Count: 0");
        const incButton = getByText("Increment");
        const decButton = getByText("Decrement");

        // act
        fireEvent.click(incButton);

        // assert
        expect(countElement).toHaveTextContent("Count: 1");

        // act
        fireEvent.click(decButton);

        // assert
        expect(countElement).toHaveTextContent("Count: 0");

    })
})