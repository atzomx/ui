import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Secondary = Template.bind({});
Secondary.args = {
  // variant: "secondary",
  children: "Save"
};

export const Primary = Template.bind({});
Primary.args = {
  // variant: "primary",
  children: "Save"
};
