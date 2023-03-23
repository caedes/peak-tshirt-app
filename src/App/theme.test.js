import theme from "./theme";

describe("theme", () => {
  it("matches snapshot", () => {
    expect(theme).toMatchSnapshot();
  });
});
