import CtaButton from ".";
import { sbTitle } from "..";

export default {
  title: sbTitle("CtaButton"),
  component: CtaButton,
};

const Template = (args) => <CtaButton {...args} />;

export const MainUsage = Template.bind({});
MainUsage.args = {
  children: "Click Me",
};
