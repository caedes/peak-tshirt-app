import { screen } from "@testing-library/react";
import render from "testUtils/render";
import { createTshirt } from "testUtils/fixtures";

import TshirtCard from "./";

describe("TshirtCard", () => {
  test("without any prop, it does not render the title and the price", () => {
    render(<TshirtCard />);

    expect(screen.queryByRole("heading", { level: 5 })).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { level: 6 })).not.toBeInTheDocument();
  });

  test("with corect props, it does render the tshirt card", () => {
    const tshirt = createTshirt();

    render(<TshirtCard {...tshirt} />);

    expect(
      screen.getByRole("heading", { name: tshirt.name, level: 5 })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: `€${tshirt.price}`, level: 6 })
    ).toBeInTheDocument();
    expect(screen.getByRole("img", { name: tshirt.name })).toBeInTheDocument();

    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", `/tshirts/${tshirt.id}`);
  });
});
