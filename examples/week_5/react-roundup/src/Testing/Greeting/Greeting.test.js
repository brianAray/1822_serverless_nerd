import { fireEvent, render, screen } from "@testing-library/react"
import Greeting from "./Greeting"

describe("Greeting Component", () => {
    test("renders Hello World as a text", () => {
        // aaa
        // Arrange
        render(<Greeting/>)

        // Act
        // ... nothing

        // Assert
        const helloWorldElement = screen.getByText('Hello World', {exact: false});

        expect(helloWorldElement).toBeInTheDocument();
    });

    test("Renders It's nice to meet you as text on load", () => {
        render(<Greeting/>);

        const textElement = screen.getByText("It's nice to meet you");

        expect(textElement).toBeInTheDocument();
    });

    test("Renders I have been changed when change text button has been clicks", () => {
        render(<Greeting/>);

        const changeTextButton = screen.getByRole("button");
        fireEvent.click(changeTextButton);

        const textElement = screen.getByText("I have been changed");

        expect(textElement).toBeInTheDocument();
    });

    test("Does not render It's nice to meet you when button is clicked twice", () => {
        render(<Greeting/>);

        const button = screen.getByRole("button");
        fireEvent.click(button);
        fireEvent.click(button);
        const textElement = screen.queryByText("It's nice to meet you");

        expect(textElement).not.toBeInTheDocument();
    })
})