import Counter from ".";

export default {
  title: "App/Counter",
  component: Counter,
};

const Template = (args) => <Counter {...args} />;

export const DefaultUsage = Template.bind({});

export const WithA2ValueStep = Template.bind({});
WithA2ValueStep.args = {
  step: 2,
};

export const NegativeDefaultCounter = Template.bind({});
NegativeDefaultCounter.args = {
  defaultCounter: -10,
};
