import Counter from ".";

export default {
  title: "Counter",
  component: Counter,
};

const Template = (args) => <Counter {...args} />;

export const DefaultUsage = Template.bind({});

export const WithA2ValueStep = Template.bind({});
WithA2ValueStep.args = {
  step: 2,
};
