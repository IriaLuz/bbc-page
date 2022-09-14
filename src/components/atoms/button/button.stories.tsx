import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./button";

export default {
  title: "atoms/button",
  component: Button,
  argTypes: { onClick: { action: "clicked" } },
  decorators: [
    (Story) => (
      <div style={{ margin: "10em 1em" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Buttons = Template.bind({});
Buttons.args = {
  primary: true,
  label: "Button very very long text here, so the button will adjust the size",
};
