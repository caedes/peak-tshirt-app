import CtaButton from ".";

export default {
  title: "CtaButton",
  component: CtaButton,
};

const Template = (args) => <CtaButton {...args} />;

export const MainUsage = Template.bind({});
MainUsage.args = {
  children: "Click Me",
};
