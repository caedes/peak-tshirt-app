import { CtaButton } from "ds/atoms";

import BottomCallToActions from ".";
import { sbTitle } from "..";

export default {
  title: sbTitle("BottomCallToActions"),
  component: BottomCallToActions,
};

const Template = (args) => <BottomCallToActions {...args} />;

export const MainUsage = Template.bind({});
MainUsage.args = {
  children: "Click Me",
  secondary: "Secondary Text",
};

export const WithACtaButton = Template.bind({});
WithACtaButton.args = {
  children: <CtaButton>Click Me</CtaButton>,
  secondary: "Secondary Text",
};
