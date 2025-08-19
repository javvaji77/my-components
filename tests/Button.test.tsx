import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../src/components/Button";

test("renders button and triggers click", () => {
  const handleClick = jest.fn();
  render(<Button label="Test Button" onClick={handleClick} />);
  const button = screen.getByText(/Test Button/i);
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalled();
});
