import { screen } from "@testing-library/react";
import renderWithRouter from "testUtils/renderWithRouter";

import TshirtCard from "./";

const tshirt = {
  id: 1,
  name: "Tshirt Name",
  description: "Tshirt Description",
  imageUrl: "1.jpg",
  size: "M",
  price: 12.99,
};

describe("TshirtCard", () => {
  test("without any prop, it does not render the title and the price", () => {
    renderWithRouter(<TshirtCard />);

    expect(screen.queryByRole("heading", { level: 5 })).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { level: 6 })).not.toBeInTheDocument();
  });

  test("with corect props, it does render the tshirt card", () => {
    renderWithRouter(<TshirtCard {...tshirt} />);

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
