import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./src/data/App";
import { expect, test, describe } from 'vitest'

describe("App", () => {
  test("renders the App correctly", () => {
    render(<App />);
    expect(screen.getByText("Welcome to the App")).toBeInTheDocument();
  });

  test("button click updates state", async () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /click me/i });
    await userEvent.click(button);
    expect(screen.getByText("Clicked!")).toBeInTheDocument();
  });
});
