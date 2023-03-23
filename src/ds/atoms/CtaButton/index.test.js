import { render } from "@testing-library/react";

import CtaButton from ".";

describe("CtaButton", () => {
  test("should pass children and all the other props on MUI Button", () => {
    const { container } = render(
      <CtaButton data-foo="bar">Click Me</CtaButton>
    );

    expect(container).toMatchSnapshot();
  });
});
