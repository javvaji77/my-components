import { render, screen } from "@testing-library/react";
import Table from "../src/components/Table";

test("renders table with data", () => {
  const data = [{ Name: "Alice", Age: 25 }];
  render(<Table data={data} />);
  expect(screen.getByText("Alice")).toBeInTheDocument();
});
