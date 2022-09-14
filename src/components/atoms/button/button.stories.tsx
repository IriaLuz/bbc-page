import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "atoms/button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  decorators: [
    (Story) => (
      <div style={{ margin: "10em 1em" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Button>;

const onClick = () => {
  console.log("button Clicked ");
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Buttons = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Buttons.args = {
  primary: true,
  label: "Button very very long text here, so the button will adjust the size",
  onClick,
};
