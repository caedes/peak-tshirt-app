import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from "./";

/**
 * button Test Helper pour récupérer un bouton en foncion de son nom
 *
 * @param {string} name
 * @returns
 */
const button = (name) => screen.getByRole("button", { name });

describe("Counter", () => {
  it("displays zero as the default value", () => {
    render(<Counter />);

    expect(
      screen.getByRole("heading", { name: 0, level: 3 })
    ).toBeInTheDocument();
  });

  it("displays an Add button", () => {
    render(<Counter />);

    expect(button("Add")).toBeInTheDocument();
  });

  it("displays an Substract button", () => {
    render(<Counter />);

    expect(button("Substract")).toBeInTheDocument();
  });

  describe("after clicking on Add button", () => {
    it("displays 1", () => {
      render(<Counter />);

      userEvent.click(button("Add"));

      expect(
        screen.getByRole("heading", { name: 1, level: 3 })
      ).toBeInTheDocument();
    });
  });

  describe("after clicking on Substract button", () => {
    it("displays -1", () => {
      render(<Counter />);

      userEvent.click(button("Substract"));

      expect(
        screen.getByRole("heading", { name: -1, level: 3 })
      ).toBeInTheDocument();
    });
  });
});
