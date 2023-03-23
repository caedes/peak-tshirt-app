import { render, screen } from "@testing-library/react";

import Price from ".";

describe("Price", () => {
  let languageGetter;

  beforeEach(() => {
    languageGetter = jest.spyOn(window.navigator, "language", "get");
  });

  test("should display the price in Euro and in english version", () => {
    render(<Price value={12.34} />);

    expect(screen.getByText("€12.34")).toBeInTheDocument();
  });

  test("with a french language should display the price in Euro and in french version", () => {
    languageGetter.mockReturnValue("fr");
    render(<Price value={12.34} />);

    expect(screen.getByText("12,34 €")).toBeInTheDocument();
  });

  test("with a dollar currency should display the price in dollar and in english version", () => {
    render(<Price value={12.34} currency="USD" />);

    expect(screen.getByText("12,34 $US")).toBeInTheDocument();
  });
});
