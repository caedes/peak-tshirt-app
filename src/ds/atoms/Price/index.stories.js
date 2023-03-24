import Price from ".";
import { sbTitle } from "..";

export default {
  title: sbTitle("Price"),
  component: Price,
};

const Template = (args) => <Price {...args} />;

export const PositivePrice = Template.bind({});
PositivePrice.args = {
  value: 12.34,
};

export const NegativePrice = Template.bind({});
NegativePrice.args = {
  value: -56.78,
};

export const DiscountPrice = Template.bind({});
DiscountPrice.args = {
  value: -56.78,
  variant: "discount",
};
