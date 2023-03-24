import render from "testUtils/render";
import { screen, waitFor } from "@testing-library/react";
import { CartProvider } from "core/contexts";
import { createTshirt } from "testUtils/fixtures";

import TshirtPage from ".";

describe("TshirtPage", () => {
  test.todo("should display a circular progress while loading data");

  test.todo("should display an error while loading data failed");

  test("should display a tshirt card with the loaded data and an add to cart button", async () => {
    const tshirt = createTshirt();

    render(<TshirtPage />, {
      path: `/tshirts/:tshirtId`,
      initialEntries: [`/tshirts/${tshirt.id}`],
      wrapper: CartProvider,
    });

    await waitFor(() =>
      screen.findByRole("heading", { name: tshirt.name, level: 5 })
    );

    expect(
      screen.getByRole("button", { name: "Add to cart" })
    ).toBeInTheDocument();
  });
});
